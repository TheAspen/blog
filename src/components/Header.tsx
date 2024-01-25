import React, { useContext } from "react";
import { navigate } from "gatsby";
import {
  Button,
  Header as Gr_Header,
  Nav,
  Grommet,
  Text,
  ResponsiveContext,
  Menu,
  Anchor,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { Head } from "./Head";

const customTheme = {
  anchor: {
    color: "white",
  },
  button: {
    color: "white",
    border: {
      color: "#05eefa",
    },
    primary: {
      color: "status-ok",
      border: { color: "accent-1" },
    },
  },
  menu: {
    background: "#595e63",
    extend: `border: 1px solid #6FFFB0; borderRadius: 8px`,
  },
};

const aboutPage = "/about/";
const homePage = "/";
const blogPage = "/posts/";

const Header = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Grommet theme={customTheme}>
      <Gr_Header pad="medium" sticky="scrollup" justify="between">
        <Text>The Aspen's Devlog</Text>
        {size == "small" || size == "medium" ? (
          <Menu
            margin={{ right: "30px" }}
            icon={<MenuIcon color="accent-1" />}
            dropAlign={{ top: "bottom" }}
            items={[
              {
                label: "Home",
                onClick: () => navigate(homePage),
                style:
                  size == "small"
                    ? { padding: "5px 15px 5px 15px" }
                    : { padding: "5px 20px 5px 20px" },
              },
              {
                label: "Devlog",
                onClick: () => navigate(blogPage),
                style:
                  size == "small"
                    ? { padding: "5px 15px 5px 15px" }
                    : { padding: "5px 20px 5px 20px" },
              },
              {
                label: "About",
                onClick: () => navigate(aboutPage),
                style:
                  size == "small"
                    ? { padding: "5px 15px 5px 15px" }
                    : { padding: "5px 20px 5px 20px" },
              },
            ]}
          />
        ) : (
          <Nav direction="row" gap="large">
            <Anchor label="Home" onClick={() => navigate(homePage)}></Anchor>
            <Anchor label="Devlog" onClick={() => navigate(blogPage)}></Anchor>
            <Anchor label="About" onClick={() => navigate(aboutPage)}></Anchor>
            {/* <Button secondary label="Home" onClick={() => navigate(homePage)} />
            <Button
              secondary
              label="Devlog"
              onClick={() => navigate(blogPage)}
            />
            <Button
              secondary
              label="About"
              onClick={() => navigate(aboutPage)}
            /> */}
          </Nav>
        )}
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
