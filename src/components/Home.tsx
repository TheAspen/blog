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
import CookieConsent from "./CookieConsest";

const blogPage = "/posts/";
const aboutPage = "/about/";
const introductionPost = "/posts/2/";
const toSteam = "https://store.steampowered.com/app/3552750/Enfora_Star/";
const steamIcon = "/images/steam.png";

const introduction = `Greetings, and welcome to read my game development devlog. On this website, I will publish development logs of how my game project is ongoing.`;
const introduction2 = `For now, this devlog only focuses on a top-down shooter called Enfora Star, but more about the project is on the devlog page!`;

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
                      image: "url(/images/header_new.png)",
                      opacity: "strong",
                    }}
                    pad="medium"
                  >
                    <Image
                      style={{ maxWidth: "inherit" }}
                      src="/images/enfora_star_text.png"
                    ></Image>
                    <Box
                      round
                      pad="small"
                      background={{ color: "dark-1", opacity: "medium" }}
                    >
                      <Text weight="bold" size="xlarge" textAlign="center">
                        Enfora Star is an arcade-like top-down shooter. Collect
                        new weapons or upgrade existing ones to fight better
                        against enemy waves.
                      </Text>
                    </Box>
                    <Box
                      direction={size === "small" ? "column" : "row"}
                      gap="small"
                    >
                      <Button
                        onClick={() => navigate(introductionPost)}
                        label="Project introduction"
                        size="large"
                      />
                      <Button
                        onClick={() => navigate(toSteam)}
                        label="Steam"
                        size="large"
                        icon={
                          <img
                            src={steamIcon}
                            alt="Steam"
                            style={{ width: "40px", height: "40px" }}
                          />
                        }
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
      <CookieConsent />
      <Footer />
    </Grommet>
  );
};

export default App;
