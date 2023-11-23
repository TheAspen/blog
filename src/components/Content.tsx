import React from "react";
import { Box } from "grommet";

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props): JSX.Element => {
  return (
    <Box style={{ marginTop: "10px", marginBottom: "10px" }}>{children}</Box>
  );
};

export default Content;
