import React from "react";
import Grid from "@mui/material/Grid2";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function MUIBadge() {
  return (
    <div style={{ marginTop: "100px", marginLeft: "20px" }}>
      <Badge
        badgeContent={15}
        color="primary"
        max={9}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MailIcon color="secondary" />
      </Badge>
    </div>
  );
}

export default MUIBadge;
