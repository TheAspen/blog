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

const About: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Page background="main" style={{ height: "100vh" }}>
        <Header />
        <PageContent fill gap="small">
          <ResponsiveContext.Consumer>
            {(size) => (
              <Grid
                rows={["flex", "auto"]}
                columns={size === "small" ? "100%" : ["20%", "40%", "40%"]}
              >
                <Text>
                  I'm software engineer from Finland whom has been passionated
                  about games and game development whole my life. I live in
                  Kajaani which is a small town in Kainuu region of Finland and
                  I have graduated from Kajaani University of Applied Sciences
                  where I studied game development during 2015-2019.
                </Text>
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

export default About;
