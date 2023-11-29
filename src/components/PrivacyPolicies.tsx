import React from "react";
import Header from "./Header";
import { Grommet, Page, PageContent, Paragraph } from "grommet";
import Footer from "./Footer";
import Content from "./Content";
import { mainTheme } from "../themes/themes";

const PrivacyPolicies: React.FC = () => {
  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" style={{ height: "100vh" }}>
        <PageContent fill gap="small">
          <Content>
            <Paragraph></Paragraph>
          </Content>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default PrivacyPolicies;
