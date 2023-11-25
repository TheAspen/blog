import React from "react";
import { Heading, Text, Box, Paragraph } from "grommet";
import { navigate } from "gatsby";

interface Props {
  index: string;
  header: string;
  content: string;
}

const BlogPostCard = ({ index, content, header }: Props): JSX.Element => {
  return (
    <Box
      background="#6B6E70"
      pad="small"
      round
      onClick={() => navigate("/posts/" + index)}
    >
      <Heading>{header}</Heading>
      <Paragraph>{content}</Paragraph>
    </Box>
  );
};

export default BlogPostCard;
