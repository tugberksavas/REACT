import { Divider, Stack } from "@mui/material";
import React from "react";

function MUIStack() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={10}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </Stack>
      <hr />
      <Stack
        sx={{ marginTop: "30px", backgroundColor: "orange" }}
        // direction="row"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </Stack>
      <hr />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        // direction="row"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </Stack>
    </div>
  );
}

export default MUIStack;
