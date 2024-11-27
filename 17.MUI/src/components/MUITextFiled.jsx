import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function MUITextFiled() {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" />
        <TextField label="soyisim" variant="filled" />
        <TextField label="adres" variant="standard" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="standard" color="error" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          style={{ marginRight: "10px" }}
          label="isim"
          variant="filled"
          color="success"
          helperText="isminizi giriniz"
        />
        <TextField
          style={{ backgroundColor: "lightgrey" }}
          label="sifre"
          type="password"
          variant="filled"
          color="secondary"
          helperText="sifrenizi giriniz giriniz"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          disabled
          label="isim"
          type="number"
          variant="filled"
          color="success"
          helperText="isminizi giriniz"
        />
        <TextField
          label="Kimlik No"
          type="number"
          variant="filled"
          color="warning"
          helperText="tcnizi giriniz"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isminizi giriniz"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          label="isminizi giriniz"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PermIdentityIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="Deneme" variant="filled" size="small" />
        <TextField label="Deneme" variant="filled" size="medium" />
      </div>
    </div>
  );
}

export default MUITextFiled;
