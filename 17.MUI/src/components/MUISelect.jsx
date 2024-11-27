import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function MUISelect() {
  const [currencies, setCurrencies] = useState([]);
  console.log(currencies);
  return (
    <div>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Para Birimi</InputLabel>
        <Select value={curreny} onChange={(e) => setCurrency(e.target.value)}>
          <MenuItem value="TRY">Turk Lirasi</MenuItem>
          <MenuItem value="USD">DOLAR</MenuItem>
          <MenuItem value="EUR">EURO</MenuItem>
        </Select>
      </FormControl> */}
      <TextField
        SelectProps={{ multiple: true }}
        value={currencies}
        onChange={(e) => setCurrencies(e.target.value)}
        sx={{ width: "250px" }}
        label="Para Birmi"
        select
      >
        <MenuItem value="TRY">Turk Lirasi</MenuItem>
        <MenuItem value="USD">DOLAR</MenuItem>
        <MenuItem value="EUR">EURO</MenuItem>
      </TextField>
    </div>
  );
}

export default MUISelect;
