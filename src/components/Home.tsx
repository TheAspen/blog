import React from "react";
import Header from "./Header";
import {
  Grommet,
  Page,
  PageContent,
  Text,
  Box,
  ResponsiveContext,
  Grid,
  Paragraph,
  Heading,
} from "grommet";
import Footer from "./Footer";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main">
        <PageContent>
          <ResponsiveContext.Consumer>
            {(size) => (
              <Grid columns={size === "small" ? "100%" : ["55%", "45%"]}>
                <Box>
                  <Heading size="medium">Welcome</Heading>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer commodo gravida tincidunt. Nunc fringilla blandit
                    tortor, id accumsan nisi dictum quis. Aenean porttitor at mi
                    id semper. Donec mattis bibendum leo, interdum ullamcorper
                    lectus ultrices vel. Fusce nec enim faucibus nunc porta
                    egestas. Fusce dapibus lobortis tincidunt.
                  </Paragraph>
                </Box>
                <Box>
                  <Heading textAlign="center" size="small">
                    Latest Devlogs
                  </Heading>
                  <NewBlogPosts />
                </Box>
              </Grid>
            )}
          </ResponsiveContext.Consumer>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
