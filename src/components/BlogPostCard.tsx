import React from "react";
import { Heading, Box, Paragraph } from "grommet";
import { navigate } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  index: string;
  header: string;
  content: string;
  date: string;
  image?: IGatsbyImageData;
}

const BlogPostCard = ({
  index,
  content,
  header,
  date,
  image,
}: Props): JSX.Element => {
  const getContent = (): JSX.Element => {
    if (!image)
      return (
        <Box>
          <Heading>{header}</Heading>
          <Paragraph>{content}</Paragraph>
          <Paragraph>{date}</Paragraph>
        </Box>
      );

    // Image is small. Put it next to the text (Right side).
    if (image.width <= 320) {
      return (
        <>
          <Box>
            <Heading>{header}</Heading>
            <Paragraph>{content}</Paragraph>
            <Paragraph>{date}</Paragraph>
          </Box>
          <GatsbyImage
            style={{ alignSelf: "center", margin: "auto" }}
            alt={"thumbnail-" + index}
            image={image}
          />
        </>
      );
    }
    // Image is large. Put it bottom of the text.
    return (
      <Box width="100%" overflow="hidden">
        <Heading>{header}</Heading>
        <Paragraph>{content}</Paragraph>
        <Paragraph>{date}</Paragraph>
        <GatsbyImage
          style={{ alignSelf: "center" }}
          alt={"thumbnail-" + index}
          image={image}
        />
      </Box>
    );
  };

  return (
    <Box
      //background="#00488c"
      background="#013c73"
      border={{ color: "#05eefa", size: "2px" }}
      pad="small"
      round
      onClick={() => navigate("/posts/" + index)}
      direction="row"
      style={{ boxShadow: "0 0 10px 2px #48abe0" }}
      hoverIndicator={{ background: "#004687" }}
    >
      {getContent()}
    </Box>
  );
};

export default BlogPostCard;
