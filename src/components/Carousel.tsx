import React from "react";
import { Box, Button, Carousel, Grommet, Text } from "grommet";

export const InteractiveSlides = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  <Grommet>
    <Box align="center" pad="large">
      <Carousel controls="arrows" height="medium" width="xlarge" play={5000}>
        <Box
          fill
          align="center"
          justify="center"
          background="lavender"
          gap="small"
        >
          <Text weight="bold" size="xlarge">
            Slide 1
          </Text>
          <Button label="Button" />
        </Box>
        <Box
          fill
          align="center"
          justify="center"
          background="light-3"
          gap="small"
        >
          <Text weight="bold" size="xlarge">
            Slide 2
          </Text>
          <Button label="Button" />
          <Button label="Button" />
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

InteractiveSlides.storyName = "Interactive slides";

export default InteractiveSlides;
