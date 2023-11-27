import React from "react";
import { navigate } from "gatsby";
import {
  Button,
  Header as Gr_Header,
  Nav,
  Grommet,
  Text,
  ResponsiveContext,
  Menu,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

const customTheme = {
  button: {
    border: {
      color: "accent-1",
    },
    primary: {
      color: "status-ok",
      border: { color: "accent-1" },
    },
  },
  menu: {
    background: "#595e63",
    extend: `border: 3px solid gray, borderRadius: 10px`,
  },
};

const aboutPage = "/about/";
const homePage = "/";
const blogPage = "/posts/";

const Header: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Gr_Header pad="small" background="#474b4F" sticky="scrollup">
        <Text>Gr_Header1</Text>
        <ResponsiveContext.Consumer>
          {(size) => {
            return size == "small" ? (
              <Menu
                margin={{ right: "30px" }}
                icon={<MenuIcon color="accent-1" />}
                dropAlign={{ top: "bottom" }}
                items={[
                  {
                    label: "Home",
                    onClick: () => navigate(homePage),
                    style: { padding: "5px 15px 5px 15px" },
                  },
                  {
                    label: "Devlog",
                    onClick: () => navigate(blogPage),
                    style: { padding: "5px 15px 5px 15px" },
                  },
                  {
                    label: "About",
                    onClick: () => navigate(aboutPage),
                    style: { padding: "5px 15px 5px 15px" },
                  },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Button
                  secondary
                  label="Home"
                  onClick={() => navigate(homePage)}
                />
                <Button
                  secondary
                  label="Devlog"
                  onClick={() => navigate(blogPage)}
                />
                <Button
                  secondary
                  label="About"
                  onClick={() => navigate(aboutPage)}
                />
              </Nav>
            );
          }}
        </ResponsiveContext.Consumer>
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
