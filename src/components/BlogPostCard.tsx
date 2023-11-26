import React from "react";
import { Heading, Text, Box, Paragraph } from "grommet";
import { navigate } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  index: string;
  header: string;
  content: string;
  image?: IGatsbyImageData;
}

const BlogPostCard = ({
  index,
  content,
  header,
  image,
}: Props): JSX.Element => {
  console.log("image: ", image);
  return (
    <Box
      background="#6B6E70"
      pad="small"
      round
      onClick={() => navigate("/posts/" + index)}
      direction="row"
    >
      <Box>
        <Heading>{header}</Heading>
        <Paragraph>{content}</Paragraph>
      </Box>
      {image && (
        <GatsbyImage
          style={{ alignSelf: "center" }}
          alt={"thumbnail-" + index}
          image={image}
        />
      )}
    </Box>
  );
};

export default BlogPostCard;
