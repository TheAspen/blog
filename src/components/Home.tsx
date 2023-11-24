import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import NewBlogPosts from "./NewBlogPosts";

const customTheme = {};

const App: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <Header />
      <Page
        // style={{ height: "100vh" }}
        // overflow={{ vertical: "scroll" }}
        kind="narrow"
      >
        <PageContent fill gap="small">
          <Content>
            <NewBlogPosts />
          </Content>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default App;
