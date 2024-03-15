import React, { useContext } from "react";
import { navigate } from "gatsby";
import {
  Header as Gr_Header,
  Nav,
  Grommet,
  Text,
  ResponsiveContext,
  Menu,
  Anchor,
  Tip,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

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
        {size == "small" ? (
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
              // {
              //   label: "About",
              //   onClick: () => navigate(aboutPage),
              //   style:
              //     size == "small"
              //       ? { padding: "5px 15px 5px 15px" }
              //       : { padding: "5px 20px 5px 20px" },
              // },
            ]}
          />
        ) : (
          <Nav direction="row" gap="large">
            <Anchor label="Home" onClick={() => navigate(homePage)}></Anchor>
            <Anchor label="Devlog" onClick={() => navigate(blogPage)}></Anchor>
            <Tip content={<Text color="white">Coming soon!</Text>}>
              <Anchor
                style={{ textDecorationLine: "line-through" }}
                disabled
                label="About"
                onClick={() => navigate(aboutPage)}
              ></Anchor>
            </Tip>
          </Nav>
        )}
      </Gr_Header>
    </Grommet>
  );
};

export default Header;
