import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MUISnackBar() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleClick = () => {
    setOpenSnackBar(true);
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };
  const action = (
    <React.Fragment>
      <Button size="small" color="primary" onClick={handleClose}>
        Kapat
      </Button>
      <IconButton sx={{ color: "#fff" }} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>Snackbari Ac</Button>
      <Snackbar
        open={openSnackBar}
        message="Hata olustu"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default MUISnackBar;
