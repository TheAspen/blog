import React from "react";
import { Box, Grommet, Page, PageContent } from "grommet";
import BlogPostCard from "./BlogPostCard";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { mainTheme } from "../themes/themes";
import { ImageDataLike, getImage } from "gatsby-plugin-image";

const BlogPosts: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllBlogPosts1 {
      allMarkdownRemark {
        nodes {
          frontmatter {
            index
            title
            desc
            date
            thumb {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
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
      <Page style={{ minHeight: "100vh" }} background="main" kind="narrow">
        <Header />
        <PageContent fill gap="small">
          <Content>
            {posts.map(
              (post: {
                id: React.Key | null | undefined;
                frontmatter: {
                  index: string;
                  title: string;
                  desc: string;
                  date: string;
                  thumb: ImageDataLike | undefined;
                };
              }) => {
                const image = post.frontmatter.thumb
                  ? getImage(post.frontmatter.thumb)
                  : undefined;

                return (
                  <Box
                    key={post.id}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <BlogPostCard
                      index={post.frontmatter.index}
                      content={post.frontmatter.desc}
                      header={post.frontmatter.title}
                      date={post.frontmatter.date}
                      image={image}
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
