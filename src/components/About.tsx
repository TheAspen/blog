import React from "react";
import Header from "./Header";
import {
  Grid,
  Grommet,
  Page,
  PageContent,
  ResponsiveContext,
  Text,
} from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import { mainTheme } from "../themes/themes";

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" style={{ height: "100vh" }}>
        <PageContent fill gap="small">
          <ResponsiveContext.Consumer>
            {(size) => (
              <Grid
                rows={["flex", "auto"]}
                columns={size === "small" ? "100%" : ["20%", "40%", "40%"]}
              >
                <Text> jee</Text>
                <Text> jee</Text>
                <Text> jee</Text>
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
