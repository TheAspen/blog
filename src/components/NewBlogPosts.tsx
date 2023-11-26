import React from "react";
import { Box } from "grommet";
import BlogPostCard from "./BlogPostCard";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";

const NewBlogPosts: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllBlogPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            index
            title
            desc
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

  const firstPosts = [];
  for (let i = 0; i < 4; i++) {
    firstPosts.push(posts[i]);
  }

  return firstPosts.map(
    (post: {
      id: React.Key | null | undefined;
      frontmatter: {
        index: string;
        title: string;
        desc: string;
        thumb: ImageDataLike | undefined;
      };
    }) => {
      const image = post.frontmatter.thumb
        ? getImage(post.frontmatter.thumb)
        : undefined;
      return (
        <Box key={post.id} style={{ marginTop: "10px", marginBottom: "10px" }}>
          <BlogPostCard
            index={post.frontmatter.index}
            content={post.frontmatter.desc}
            header={post.frontmatter.title}
            image={image}
          ></BlogPostCard>
        </Box>
      );
    }
  );
};

export default NewBlogPosts;
