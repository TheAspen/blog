import React from "react";
import { Heading, Text, Box, Paragraph } from "grommet";

interface Props {
  id: string;
  header: string;
  content: string;
}

const BlogPostCard = ({ id, content, header }: Props): JSX.Element => {
  return (
    <Box background="light-2" pad="small" round onClick={() => null}>
      <Heading>{header}</Heading>
      <Paragraph>{content}</Paragraph>
    </Box>
  );
};

export default BlogPostCard;
