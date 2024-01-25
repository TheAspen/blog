import React from "react";
import { Grommet, Page, PageContent, PageHeader, Text } from "grommet";
import { graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { mainTheme } from "../themes/themes";

interface Props {
  data: {
    markdownRemark: {
      html: string | TrustedHTML;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const BlogPost = ({ data }: Props) => {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;

  return (
    <Grommet theme={mainTheme}>
      <Page background="main" style={{ height: "100vh" }} kind="narrow">
        <Header />
        <PageContent fill gap="small">
          <PageHeader title={title} />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <Text> {date}</Text>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export const query = graphql`
  query MyQuery($index: Int) {
    markdownRemark(frontmatter: { index: { eq: $index } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;

export default BlogPost;
