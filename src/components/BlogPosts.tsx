import React from "react";
import { Box, Grommet, Page, PageContent } from "grommet";
import BlogPostCard from "./BlogPostCard";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const BlogPosts: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllBlogPosts1 {
      allMarkdownRemark {
        nodes {
          frontmatter {
            index
            title
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
    <Grommet>
      <Header />
      <Page kind="narrow">
        <PageContent fill gap="small">
          <Content>
            {posts.map(
              (post: {
                id: React.Key | null | undefined;
                frontmatter: { index: string; title: string };
              }) => {
                return (
                  <Box
                    key={post.id}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <BlogPostCard
                      index={post.frontmatter.index}
                      content="Testi posti"
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
