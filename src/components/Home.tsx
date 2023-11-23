import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import BlogPosts from "./BlogPosts";

const customTheme = {};

const App: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Header />
      <Page style={{ height: "100vh" }} kind="narrow">
        <PageContent fill gap="small">
          <Content>
            <BlogPosts />
          </Content>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
