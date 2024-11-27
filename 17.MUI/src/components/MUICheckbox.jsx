import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function MUICheckbox() {
  const [isConfirm, setIsConfirm] = useState(false);
  const submit = () => {
    if (!isConfirm) {
      alert("Sozlesmeyi onaylayiniz....");
    } else {
      alert("Sozlesme onaylandi....");
    }
  };
  console.log(isConfirm);
  return (
    <div>
      <div>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="top"
              control={<Checkbox />}
              label="Ilkokul"
              labelPlacement="end"
            />
            <FormControlLabel
              value="top"
              control={<Checkbox />}
              label="Lise"
              labelPlacement="end"
            />
            <FormControlLabel
              value="top"
              control={<Checkbox defaultChecked />}
              label="Universite"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
      <hr />
      <div>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isConfirm}
                  onChange={(e) => setIsConfirm(e.target.checked)}
                />
              }
              label="Kullanim kosullarini kabul ediyorum"
              labelPlacement="end"
            />
            <Button onClick={submit} variant="contained">
              Formu Gonder
            </Button>
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default MUICheckbox;
