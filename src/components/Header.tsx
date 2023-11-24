import React from "react";
import { navigate } from "gatsby";
import { Button, Header as Gr_Header, Nav, Grommet, Text } from "grommet";

const customTheme = {
  button: {
    // default: {},
    border: {
      color: "accent-1",
    },
    // color: { dark: "accent-1", light: "dark-2" },
    primary: {
      color: "status-ok",
      border: { color: "accent-1" },
    },
    // secondary: {
    //   border: { color: "accent-1" },
    // },
    // hover: {
    //   background: { color: "accent-1" },
    //   secondary: {
    //     border: { color: "active" },
    //     background: { color: "active" },
    //   },
    // },
  },
};

const aboutPage = "/about/";
const homePage = "/";
const blogPage = "/posts/";

const Header: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Gr_Header pad="small" sticky="scrollup">
        <Text>Gr_Header1</Text>
        <Nav direction="row">
          <Button secondary label="Home" onClick={() => navigate(homePage)} />
          <Button secondary label="Blog" onClick={() => navigate(blogPage)} />
          <Button secondary label="About" onClick={() => navigate(aboutPage)} />
        </Nav>
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
