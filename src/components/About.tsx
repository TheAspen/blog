import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent, Text } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import { mainTheme } from "../themes/themes";

const customTheme = {};

const App: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" style={{ height: "100vh" }} kind="narrow">
        <PageContent fill gap="small">
          <Content>
            <Text> JEE </Text>
          </Content>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
