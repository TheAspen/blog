import React from "react";
import { Box } from "grommet";
import BlogPost from "./BlogPost";

const Content: React.FC = () => {
  return (
    <Box
      style={{ marginTop: "10px", marginBottom: "10px" }}
      background="light-2"
      pad="small"
      round
    >
      <BlogPost
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo gravida tincidunt. Nunc fringilla blandit tortor, id
            accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec
            mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce
            nec enim faucibus nunc porta egestas. Fusce dapibus lobortis
            tincidunt."
        header="TEST HEADER"
      ></BlogPost>
    </Box>
  );
};

export default Content;
