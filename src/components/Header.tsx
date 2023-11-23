import React from "react";
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

const Header: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Gr_Header pad="small" sticky="scrollup">
        <text>Gr_Header1</text>
        <Nav direction="row">
          <Button secondary label="Blog" onClick={() => null} />
          <Button secondary label="About" onClick={() => null} />
        </Nav>
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
