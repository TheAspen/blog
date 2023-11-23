import React from "react";
import { navigate } from "gatsby";
import { Button, Header as Gr_Header, Nav, Grommet } from "grommet";

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

const Header: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Gr_Header pad="small" sticky="scrollup">
        <text>Gr_Header1</text>
        <Nav direction="row">
          <Button secondary label="Blog" onClick={() => navigate(homePage)} />
          <Button secondary label="About" onClick={() => navigate(aboutPage)} />
        </Nav>
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
