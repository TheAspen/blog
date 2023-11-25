import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent, Text, Box } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import NewBlogPosts from "./NewBlogPosts";

const App: React.FC = () => {
  return (
    <Grommet
      theme={{
        global: {
          colors: { doc: "linear-gradient(#474b4F,#222629)" },
        },
      }}
    >
      <Header />
      <Page background="doc" kind="narrow">
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
