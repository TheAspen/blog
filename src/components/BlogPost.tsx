import React from "react";
import { Text } from "grommet";
import { graphql } from "gatsby";

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
    <>
      <Text>Blogpost</Text>
      <Text> {title}</Text>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Text> {date}</Text>
    </>
  );
};

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;

export default BlogPost;
