import React from "react";
import { Text, Footer as Gr_Footer, Box, Button } from "grommet";
import { Github } from "grommet-icons";
import { navigate } from "gatsby";

const Footer: React.FC = () => {
  return (
    <Gr_Footer background="accent-1" pad="medium">
      {/* <Button
        icon={<Github size="medium" />}
        onClick={() => navigate("https://github.com/TheAspen")}
      ></Button> */}

      <a
        href="https://github.com/TheAspen"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Github size="medium" />
      </a>
      <Text>Footer</Text>
    </Gr_Footer>
  );
};

export default Footer;
