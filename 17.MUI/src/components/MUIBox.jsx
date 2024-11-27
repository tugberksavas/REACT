import { Box } from "@mui/material";
import React from "react";

function MUIBox() {
  return (
    <div>
      <Box
        sx={{ width: "200px", height: "200px", backgroundColor: "orange" }}
      ></Box>
      <Box
        sx={{ width: "200px", height: "200px", backgroundColor: "orange" }}
      ></Box>
    </div>
  );
}

export default MUIBox;
