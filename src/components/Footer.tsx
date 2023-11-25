import React from "react";
import { Text, Footer as Gr_Footer, Box, Button } from "grommet";
import { Github, Linkedin } from "grommet-icons";
import { navigate } from "gatsby";

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

      <Text>Footer</Text>
    </Gr_Footer>
  );
};

export default Footer;
