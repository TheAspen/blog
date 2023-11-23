import React from "react";
import { Actions } from "gatsby";
import { Box } from "grommet";
import BlogPostCard from "./BlogPostCard";
import type { GatsbyNode } from "gatsby";

// export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions;

//   const data = [
//     {
//       id: "1",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce",
//       header: "TEST HEADER",
//     },
//   ];

//   data.forEach((d) => {
//     const node = {
//       parent: null,
//       children: [],
//       id: createNodeId(`${d.id}`),
//       internal: {
//         type: "Post",
//         content: JSON.stringify(d),
//         contentDigest: createContentDigest(d),
//       },
//     };

//     createNode(node);
//   });
// };

const BlogPosts: React.FC = () => {
  return (
    <Box style={{ marginTop: "10px", marginBottom: "10px" }}>
      <BlogPostCard
        id="1"
        content="Testi posti"
        header="TEST HEADER"
      ></BlogPostCard>
    </Box>
  );
};

export default BlogPosts;
