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
} from "grommet";
import Footer from "./Footer";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" style={{ minHeight: "100vh" }}>
        <PageContent>
          <ResponsiveContext.Consumer>
            {(size) => (
              <Grid columns={size === "small" ? "100%" : ["55%", "45%"]}>
                <Box>
                  <Heading size="medium">Welcome</Heading>
                  <Paragraph>- Teemu, The Aspen</Paragraph>
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
