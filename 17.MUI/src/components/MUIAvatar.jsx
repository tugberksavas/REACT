import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function MUIAvatar() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Stack direction="row" spacing={2}>
        <Avatar src="https://picsum.photos/200/300" />
        <Avatar
          alt="resim cikmazsa gostermek icin"
          src="https://randomuser.me/api/portraits/men/60.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Avatar sx={{ bgcolor: "orange" }}>E</Avatar>
        <Avatar sx={{ bgcolor: "blue", width: 70, height: 70 }}>T</Avatar>
      </Stack>
    </div>
  );
}

export default MUIAvatar;
