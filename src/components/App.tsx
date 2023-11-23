import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent, Heading, Paragraph } from "grommet";
import Footer from "./Footer";
import Content from "./Content";

const customTheme = {};

const App: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Header />
      <Page style={{ height: "100vh" }} kind="narrow">
        <PageContent fill gap="small">
          <Content />
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
