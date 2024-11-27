import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Stack } from "@mui/material";

function MUIAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openUrunler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const openControl = anchorEl ? true : false; // anchorEl !== null
  const closeUrunler = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" component="div">
            MUI AppBar
          </Typography>
          <Stack direction="row" sx={{ marginLeft: "auto" }}>
            <Button sx={{ color: "white" }}>AnaSayfa</Button>
            <Button sx={{ color: "white" }}>Hakkimizda</Button>
            <Button sx={{ color: "white" }} onClick={openUrunler}>
              Urunler
            </Button>
            <Button sx={{ color: "white" }}>Iletisim</Button>
          </Stack>
          <Menu anchorEl={anchorEl} open={openControl} onClose={closeUrunler}>
            <MenuItem>Front-End</MenuItem>
            <MenuItem>Back-End</MenuItem>
            <MenuItem>Full-Stack</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MUIAppBar;
