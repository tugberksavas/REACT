import { Button } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function MUIButton() {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">Kaydol</Button>
        <Button variant="contained">Kaydol</Button>
        <Button variant="outlined">Kaydol</Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text" color="error">
          Giris Yap
        </Button>
        <Button variant="outlined" color="secondary">
          AAA
        </Button>
        <Button variant="contained" color="success">
          Giris Yap
        </Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button size="small" variant="contained" color="warning">
          Geri Don
        </Button>
        <Button size="medium" variant="contained" color="warning">
          Geri Do
        </Button>
        <Button size="large" variant="contained" color="warning">
          Geri Don
        </Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button
          size="small"
          variant="contained"
          color="warning"
          startIcon={<AddCircleOutlineIcon />}
        >
          Geri Don
        </Button>
        <Button
          size="large"
          variant="contained"
          color="inherit"
          endIcon={<AddCircleOutlineIcon />}
        >
          Geri Don
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
