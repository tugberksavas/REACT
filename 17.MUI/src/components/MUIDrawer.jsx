import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

function MUIDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Grid container>
        <Grid size={8}>
          <Button onClick={() => setIsOpen(true)}>Ac</Button>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
            <Box sx={{ width: "200px", textAlign: "center" }}>
              <h1>Lorem.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </Box>
          </Drawer>
        </Grid>
        <Grid size={4}>4luk kisim</Grid>
      </Grid>
    </div>
  );
}

export default MUIDrawer;
