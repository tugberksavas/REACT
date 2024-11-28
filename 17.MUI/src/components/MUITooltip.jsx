import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

function MUITooltip() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Tooltip
        title="Hello, world!"
        sx={{ width: 100, height: 60 }}
        placement="bottom-start"
      >
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip title="Delete">
        <DeleteIcon />
      </Tooltip>
    </div>
  );
}

export default MUITooltip;
