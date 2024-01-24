import React from "react";
import { Box, Button, Carousel, Grommet, Text, ThemeType } from "grommet";
import { navigate } from "gatsby";
import {
  Attraction,
  Car,
  RadialSelected,
  Rewind,
  FastForward,
  TreeOption,
} from "grommet-icons";

const customTheme: ThemeType = {
  carousel: {
    animation: {
      duration: 500,
    },
    icons: {
      color: "cyan",
      current: RadialSelected,
      next: FastForward,
      previous: Rewind,
    },
  },
};

const blogPage = "/posts/";

export const InteractiveSlides = () => (
  <Grommet theme={customTheme}>
    <Box align="center" pad="large">
      <Carousel
        controls="selectors"
        height="medium"
        width="xlarge" /*play={5000}*/
      >
        <Box
          fill
          align="center"
          justify="center"
          gap="small"
          // background={{
          //   image: "url(/images/carousel_border.png)",
          //   opacity: "strong",
          // }}
        >
          <Text weight="bold" size="xxlarge">
            Project: Star Defender
          </Text>
          <Text weight="bold" size="xlarge">
            Star defender is arcade-like top-down shooter. Inspired from old
            Amiga game called Star Control.
          </Text>
          <Button label="Button" />
        </Box>
        <Box fill align="center" justify="center" gap="small">
          <Text weight="bold" size="xxlarge">
            Devlog
          </Text>
          <Text weight="bold" size="xlarge">
            Follow the development progress!
          </Text>
          <Button
            size="xlarge"
            gap="medium"
            onClick={() => navigate(blogPage)}
            label="To the Devlog!"
          />
        </Box>
        <Box
          fill
          align="center"
          justify="center"
          background="light-5"
          gap="small"
        >
          <Text weight="bold" size="xlarge">
            Slide 3
          </Text>
          <Button label="Button" />
          <Button label="Button" />
          <Button label="Button" />
        </Box>
      </Carousel>
    </Box>
  </Grommet>
);

export default InteractiveSlides;
