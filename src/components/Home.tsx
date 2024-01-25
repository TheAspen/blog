import React from "react";
import Header from "./Header";
import {
  Grommet,
  Page,
  PageContent,
  Box,
  ResponsiveContext,
  Grid,
  Paragraph,
  Heading,
  Button,
  Text,
} from "grommet";
import Footer from "./Footer";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";
import Carousel from "./Carousel";
import { navigate } from "gatsby";

const blogPage = "/posts/";

const introduction = `Greetings and welcome to read my game development devlog. On
this website I will publish development logs how my game
projects are ongoing.`;
const introduction2 = `The current main project is top-down
shooter called Star Defender, but more about the project on
the devlog page!`;

const introduction3 = `I hope you enjoy the devlog posts and asdasd !`;

const signing = `Best Regards, -TheAspen`;

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Page background="main">
        <Header />
        <PageContent>
          <ResponsiveContext.Consumer>
            {(size) => (
              <>
                <Box align="center" justify="center">
                  <Heading size="medium">Welcome!</Heading>
                  <Paragraph>{introduction}</Paragraph>
                  <Paragraph>{introduction2}</Paragraph>
                  <Paragraph>{introduction3}</Paragraph>
                  <Paragraph>{signing}</Paragraph>
                  <Button
                    size="large"
                    gap="medium"
                    onClick={() => navigate(blogPage)}
                    label="To the Devlog!"
                  />
                </Box>

                <Box align="center" pad="xlarge">
                  <Box
                    fill
                    align="center"
                    justify="center"
                    gap="small"
                    // background={{
                    //   image: "url(/images/carousel_border.png)",
                    //   opacity: "strong",
                    // }}
                  >
                    <Text weight="bold" size="xxlarge">
                      Project: Star Defender
                    </Text>
                    <Text weight="bold" size="xlarge">
                      Star defender is arcade-like top-down shooter. Inspired
                      from old Amiga game called Star Control.
                    </Text>
                    <Button label="Button" />
                  </Box>
                </Box>
                <Grid columns={size === "small" ? "100%" : ["55%", "45%"]}>
                  <Box>
                    <Heading size="small">About the author!</Heading>
                    <Paragraph>
                      I'm software engineer from Finland whom has been
                      passionated about games and game development whole my
                      life. I have graduated as a
                    </Paragraph>
                  </Box>
                  <Box>
                    <Heading textAlign="center" size="small">
                      Latest Devlog
                    </Heading>
                    <NewBlogPosts />
                  </Box>
                </Grid>
              </>
            )}
          </ResponsiveContext.Consumer>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
