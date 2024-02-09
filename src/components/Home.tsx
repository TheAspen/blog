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
  Image,
  Tip,
} from "grommet";
import Footer from "./Footer";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";
import { navigate } from "gatsby";

const blogPage = "/posts/";
const aboutPage = "/about/";

const introduction = `Greetings, and welcome to read my game development devlog. On this website, I will publish development logs of how my game project is ongoing.`;
const introduction2 = `For now, this devlog only focuses on a top-down shooter called Star Defender, but more about the project is on the devlog page!`;

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
                    background={{
                      image: "url(/images/pic_4.png)",
                      opacity: "strong",
                    }}
                    pad="medium"
                  >
                    <Text weight="bold" size="xxlarge">
                      Project: Star Defender
                    </Text>
                    <Text weight="bold" size="xlarge" textAlign="center">
                      Star Defender is an arcade-like top-down shooter. Collect
                      new weapons or upgrade existing ones to fight better
                      against enemy waves.
                    </Text>

                    <Box>
                      <Text size="small">
                        Project introduction will be added soon!
                      </Text>
                      <Button
                        style={{ textDecorationLine: "line-through" }}
                        disabled
                        label="Project introduction"
                      />
                    </Box>
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
                      I'm a software engineer from Finland who has been
                      passionate about games and game development my whole life.
                      I live in Kajaani, which is a small town in the middle of
                      nowhere in the Kainuu region of Finland. I studied game
                      development at Kajaani University of Applied Sciences and
                      graduated in 2019. Ever since, I have done small game
                      projects, most of them with Godot Engine or Unreal Engine.
                    </Paragraph>
                    <Paragraph>
                      About page is still under construction!
                    </Paragraph>
                    <Button
                      size="medium"
                      gap="medium"
                      onClick={() => navigate(aboutPage)}
                      label="About page"
                      style={{ textDecorationLine: "line-through" }}
                      disabled
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
