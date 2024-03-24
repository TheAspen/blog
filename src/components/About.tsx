import React from "react";
import Header from "./Header";
import {
  Grid,
  Grommet,
  Page,
  PageContent,
  ResponsiveContext,
  Text,
  Image,
} from "grommet";
import Footer from "./Footer";
import { mainTheme } from "../themes/themes";

const About: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Page background="main" style={{ height: "100vh" }}>
        <Header />
        <PageContent fill gap="small">
          <Image
            alignSelf="center"
            src="/images/site_under_construction.png"
          ></Image>
          <ResponsiveContext.Consumer>
            {(size) => (
              <Grid
                rows={["flex", "auto"]}
                columns={size === "small" ? "100%" : ["20%", "40%", "40%"]}
              >
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </Grid>
            )}
          </ResponsiveContext.Consumer>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default About;
