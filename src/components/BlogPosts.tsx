import React from "react";
import { Box, Grommet, Page, PageContent } from "grommet";
import BlogPostCard from "./BlogPostCard";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { mainTheme } from "../themes/themes";

const BlogPosts: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllBlogPosts1 {
      allMarkdownRemark {
        nodes {
          frontmatter {
            index
            title
            desc
          }
          id
        }
      }
    }
  `);
  const posts = allMarkdownRemark.nodes;
  posts
    .sort(
      (
        a: { frontmatter: { index: number } },
        b: { frontmatter: { index: number } }
      ) => {
        return a.frontmatter.index - b.frontmatter.index;
      }
    )
    .reverse();

  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Page background="main" kind="narrow">
        <PageContent fill gap="small">
          <Content>
            {posts.map(
              (post: {
                id: React.Key | null | undefined;
                frontmatter: { index: string; title: string; desc: string };
              }) => {
                return (
                  <Box
                    key={post.id}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <BlogPostCard
                      index={post.frontmatter.index}
                      content={post.frontmatter.desc}
                      header={post.frontmatter.title}
                    ></BlogPostCard>
                  </Box>
                );
              }
            )}
          </Content>
        </PageContent>
      </Page>
      <Footer />
    </Grommet>
  );
};

export default BlogPosts;