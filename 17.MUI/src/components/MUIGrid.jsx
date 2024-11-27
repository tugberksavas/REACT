import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

function MUIGrid() {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid size={8}>item1</Grid>
          <Grid size={4}>item2</Grid>
        </Grid>
        <hr />
        <hr />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }}>aaaa</Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>bbbb</Grid>
          <Grid size={{ xs: 6, md: 4 }}>cccc</Grid>
          <Grid size={{ xs: 6, md: 8 }}>ddddd</Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MUIGrid;
