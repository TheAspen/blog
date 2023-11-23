import React from "react";
import { Heading, Text, Box, Paragraph } from "grommet";

interface Props {
  header: string;
  content: string;
}

const BlogPost = ({ content, header }: Props): JSX.Element => {
  return (
    <Box round>
      <Heading>{header}</Heading>
      <Paragraph>{content}</Paragraph>
    </Box>
  );
};

export default BlogPost;
