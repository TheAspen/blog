import React from "react";
import DOMPurify from "dompurify";
import { Grommet, Heading, Page, PageContent, Text } from "grommet";
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
  const cleanHtml = DOMPurify.sanitize(html as string, {
    USE_PROFILES: { html: true },
  });

  return (
    <Grommet theme={mainTheme}>
      <Page background="main" kind="narrow">
        <Header />
        <PageContent fill margin="small" gap="small">
          <Heading alignSelf="center">{title}</Heading>
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
          <Text alignSelf="end"> {date}</Text>
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
