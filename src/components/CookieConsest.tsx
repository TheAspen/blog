import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  CheckBox,
  Heading,
  Layer,
  Paragraph,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet";
import { FormClose } from "grommet-icons";

const privacyPage = "/privacy-policies/";

const CookieConsent = () => {
  const size = useContext(ResponsiveContext);
  // State to control visibility of the popup
  const [showConsent, setShowConsent] = useState(false);

  // Cookie preference states
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    functional: false,
    analytics: false,
    marketing: false,
  });

  // Check if preferences are already set on component mount
  useEffect(() => {
    const storedPreferences = localStorage.getItem("cookiePreferences");
    const consentGiven = localStorage.getItem("cookieConsentGiven");

    if (!consentGiven) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (storedPreferences) {
      // Load saved preferences
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Save preferences and close popup
  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    localStorage.setItem("cookieConsentGiven", "true");
    setShowConsent(false);

    // Implement actual cookie management based on preferences
    // console.log("Cookie preferences saved:", preferences);
  };

  // Accept all cookies
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsentGiven", "true");
    setShowConsent(false);

    //console.log("All cookies accepted");
  };

  // Reject all optional cookies
  const rejectAll = () => {
    const allRejected = {
      necessary: true, // Keep necessary
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(allRejected);
    localStorage.setItem("cookiePreferences", JSON.stringify(allRejected));
    localStorage.setItem("cookieConsentGiven", "true");
    setShowConsent(false);

    //console.log("All optional cookies rejected");
  };

  if (!showConsent) return null;

  return (
    <Layer
      position="center"
      modal={false}
      margin={{ vertical: "medium", horizontal: "large" }}
      animation="slide"
      background="transparent"
    >
      <Box
        pad="medium"
        gap="small"
        background="dark-1"
        round="small"
        border={{ color: "brand", size: "small" }}
        width={{ max: "800px" }}
      >
        <Box direction="row" justify="between" align="center">
          <Heading level={3} margin="none">
            Cookie Preferences
          </Heading>
          <Button
            icon={<FormClose />}
            onClick={() => setShowConsent(false)}
            plain
          />
        </Box>

        <Paragraph>
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. Please choose your cookie
          preferences:
        </Paragraph>

        <Box gap="small">
          <CheckBox
            name="necessary"
            label={
              <Text>
                Necessary Cookies
                <Text size="small" color="status-disabled">
                  (Required)
                </Text>
              </Text>
            }
            checked={preferences.necessary}
            disabled={true}
          />

          <CheckBox
            name="functional"
            label="Functional Cookies"
            checked={preferences.functional}
            onChange={handleCheckboxChange}
          />
          <CheckBox
            name="analytics"
            label="Analytics Cookies"
            checked={preferences.analytics}
            onChange={handleCheckboxChange}
          />

          <CheckBox
            name="marketing"
            label="Marketing Cookies"
            checked={preferences.marketing}
            onChange={handleCheckboxChange}
          />
        </Box>

        <Box
          direction={size !== "small" ? "row" : "column"}
          gap={size !== "small" ? "small" : "medium"}
          justify={size !== "small" ? "end" : "center"}
          wrap
          margin={{ top: "medium" }}
        >
          <Button
            label="Reject All"
            onClick={rejectAll}
            color="status-critical"
          />
          <Button label="Accept Selected" onClick={savePreferences} primary />
          <Button label="Accept All" onClick={acceptAll} />
        </Box>

        <Box align="center" margin={{ top: "small" }}>
          <Anchor href={privacyPage} label="View Cookie Policy" size="small" />
        </Box>
      </Box>
    </Layer>
  );
};

export default CookieConsent;
