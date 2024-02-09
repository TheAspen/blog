import React from "react";
import {
  Footer as Gr_Footer,
  Box,
  Text,
  Anchor,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import { Github, Linkedin } from "grommet-icons";
import { Link } from "gatsby";
import { navigate } from "gatsby";

const privacyPage = "/privacy-policies/";

const aboutPage = "/about/";
const homePage = "/";
const blogPage = "/posts/";

const Footer: React.FC = () => {
  return (
    <Box>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Gr_Footer
            direction={size === "small" ? "column" : "row"}
            pad="medium"
            //border={{ color: "dark-4", side: "top", size: "2px" }}
            background="background-back"
          >
            <Box align={size === "small" ? "center" : "start"}>
              <Text>The Aspen's Devlog</Text>
              <Paragraph>Game development blog</Paragraph>
            </Box>

            <Box gap="medium" justify="center" align="center">
              <Text>Browse</Text>
              <Box gap="small">
                <Anchor
                  size="small"
                  label="Home"
                  onClick={() => navigate(homePage)}
                ></Anchor>
                <Anchor
                  size="small"
                  label="Devlog"
                  onClick={() => navigate(blogPage)}
                ></Anchor>
                <Anchor
                  size="small"
                  label="About"
                  onClick={() => navigate(aboutPage)}
                  disabled
                ></Anchor>
              </Box>
            </Box>

            <Box
              pad="small"
              gap={size === "small" ? "large" : "medium"}
              direction="row"
              justify="center"
              align="center"
            >
              <a
                href="https://github.com/TheAspen"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Github color="accent-1" size="30px" />
              </a>

              <a
                href="https://linkedin.com/in/teemumiet"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Linkedin color="accent-1" size="30px" />
              </a>
            </Box>
          </Gr_Footer>
        )}
      </ResponsiveContext.Consumer>
      <Gr_Footer
        background="background-contrast"
        pad={{ horizontal: "large", vertical: "small" }}
        title="Copyright"
        role="none"
      >
        <Text textAlign="center" size="small">
          © 2023 Copyright
        </Text>
        <Link
          style={{ alignSelf: "center", color: "white", fontSize: "16px" }}
          to={privacyPage}
        >
          <Text textAlign="center" size="small">
            Privacy policy
          </Text>
        </Link>
      </Gr_Footer>
    </Box>
  );
};

export default Footer;
