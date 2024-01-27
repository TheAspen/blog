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
const aboutPage = "/about/";

const introduction = `Greetings and welcome to read my game development devlog. On
this website I will publish development logs how my game
project is ongoing.`;
const introduction2 = `For now this devlog only focus to top-down shooter called Star Defender, but more about the project on
the devlog page!`;

const introduction3 = `I hope you enjoy the posts and other content! Thanks for joining!`;

const signing = `Best Regards, TheAspen`;

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Page background="main">
        <Header />
        <PageContent>
          <ResponsiveContext.Consumer>
            {(size) => (
              <>
                <Grid
                  rows={["flex", "auto"]}
                  columns={size === "small" ? "100%" : ["20%", "60%", "20%"]}
                >
                  <Box></Box>
                  <Box>
                    <Heading alignSelf="center" size="medium">
                      Welcome!
                    </Heading>
                    <Paragraph fill size="large">
                      {introduction}
                    </Paragraph>
                    <Paragraph fill size="large">
                      {introduction2}
                    </Paragraph>
                    <Paragraph fill size="large">
                      {introduction3}
                    </Paragraph>
                    <Paragraph fill alignSelf="center" size="large">
                      {signing}
                    </Paragraph>
                    <Button
                      alignSelf="center"
                      gap="medium"
                      size="xlarge"
                      pad="small"
                      onClick={() => navigate(blogPage)}
                      label="To the Devlog!"
                    />
                  </Box>
                  <Box></Box>
                </Grid>

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
                    pad="medium"
                  >
                    <Text weight="bold" size="xxlarge">
                      Project: Star Defender
                    </Text>
                    <Text weight="bold" size="xlarge">
                      Star defender is arcade-like top-down shooter. Inspired
                      from old Amiga game called Star Control.
                    </Text>
                    <Button label="Project introduction" />
                  </Box>
                </Box>
                <Grid
                  gap="small"
                  columns={size === "small" ? "100%" : ["50%", "50%"]}
                  style={{ paddingBottom: "40px" }}
                >
                  <Box align="start">
                    <Heading size="small">About the author</Heading>
                    <Paragraph>
                      I'm software engineer from Finland whom has been
                      passionated about games and game development whole my
                      life. I live in Kajaani which is a small town in Kainuu
                      region of Finland and I have graduated from Kajaani
                      University of Applied Sciences where I studied game
                      development during 2015-2019.
                    </Paragraph>
                    <Paragraph>More about this on the About page!</Paragraph>
                    <Button
                      size="medium"
                      gap="medium"
                      onClick={() => navigate(aboutPage)}
                      label="About page"
                    />
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
