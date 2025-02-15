import React, { useEffect, useRef } from "react";

interface MarkdownWrapperProps {
  children: React.ReactNode;
}

const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Check if cookie consent was given
    const cookieConsent = localStorage.getItem("cookiePreferences");
    let preferences = { functional: false };

    if (cookieConsent) {
      preferences = JSON.parse(cookieConsent);
    }

    // Find all YouTube iframes
    const iframes: NodeListOf<HTMLIFrameElement> =
      contentRef.current.querySelectorAll('iframe[src*="youtube.com"]');

    iframes.forEach((iframe) => {
      if (!preferences.functional) {
        // If functional cookies not accepted, replace with placeholder or use privacy-enhanced mode
        const originalSrc = iframe.src;
        iframe.src = originalSrc.replace("youtube.com", "youtube-nocookie.com");
      }
    });
  }, []);

  return <div ref={contentRef}>{children}</div>;
};

export default MarkdownWrapper;
