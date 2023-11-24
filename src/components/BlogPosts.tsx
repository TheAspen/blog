import React from "react";
import { Box } from "grommet";
import BlogPostCard from "./BlogPostCard";

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
