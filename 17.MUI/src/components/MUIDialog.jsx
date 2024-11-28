import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MUIDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const types = {
    YES: "YES", // 1
    NO: "NO", // Add more types as needed
  };

  const result = (typeParam) => {
    console.log("Kullanici Sonucu: ", typeParam);
    if (typeParam == types.YES) {
      console.log("sozlesme onaylandi");
    }
    setDialogOpen(false);
  };
  return (
    <div>
      <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Soru</DialogTitle>
        <DialogContent>
          <DialogContentText>Sozlesmeyi Onaylayiniz</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => result(types.YES)}>İptal</Button>
          <Button onClick={() => result(types.NO)}>Onayla</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MUIDialog;
