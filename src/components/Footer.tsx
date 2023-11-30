import React from "react";
import { Footer as Gr_Footer, Box } from "grommet";
import { Github, Linkedin } from "grommet-icons";
import { Link } from "gatsby";

const privacyPage = "/privacy-policies/";

const Footer: React.FC = () => {
  return (
    <Gr_Footer
      pad="medium"
      //border={{ color: "dark-4", side: "top", size: "2px" }}
      background="#222629"
    >
      <Box gap="medium" direction="row">
        <a
          href="https://github.com/TheAspen"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Github color="accent-1" size="30px" />
        </a>

        <Linkedin color="accent-1" size="30px" />
      </Box>

      <Link
        style={{ alignSelf: "center", color: "white", fontSize: "16px" }}
        to={privacyPage}
      >
        Privacy policy
      </Link>
    </Gr_Footer>
  );
};

export default Footer;
