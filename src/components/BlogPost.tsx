import React from "react";
import sanitizeHtml from "sanitize-html";
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
  const cleanHtml = sanitizeHtml(html as string, {
    allowedTags: [
      "img",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "center",
      "img",
      "h1",
      "h2",
      "h3",
      "br",
      "span",
      "p",
      "div",
      "iframe",
    ],

    allowedAttributes: {
      a: ["href"],
      img: [
        "class",
        "alt",
        "src",
        "title",
        "srcset",
        "sizes",
        "loading",
        "style",
      ],
      iframe: [
        "src",
        "class",
        "title",
        "width",
        "height",
        "loading",
        "style",
        "frameborder",
        "allow",
        "allowfullscreen",
        "sandbox",
      ],
      span: ["class", "style"],
      div: ["class", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
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
