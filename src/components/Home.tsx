import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent, Text, Box } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import NewBlogPosts from "./NewBlogPosts";
import { mainTheme } from "../themes/themes";

const App: React.FC = () => {
  return (
    <Grommet
      theme={mainTheme}
    >
      <Header />
      <Page background="main" kind="narrow">
        <PageContent gap="small">
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
