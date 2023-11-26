import React, { useContext } from "react";
import Header from "./Header";
import {
  Grommet,
  Page,
  PageContent,
  Text,
  Box,
  ResponsiveContext,
  Grid,
} from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" kind="narrow">
        <PageContent>
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[["info", "news"]]}
          >
            <Box gridArea="info">JOU</Box>
            <Box gridArea="news">
              <NewBlogPosts />
            </Box>
          </Grid>
        </PageContent>
        {/* <PageContent gap="small">
          <Content>
            <Box direction="row" gap="small" justify="evenly">
              <Box>JOU</Box>
              <Box>
                <NewBlogPosts />
              </Box>
            </Box>
          </Content>
        </PageContent> */}
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
