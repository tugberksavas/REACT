import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import AlertTitle from "@mui/material/AlertTitle";

function MUIAlert() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid size="auto">
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Grid>
        <Grid size={6}>
          <Alert severity="info">Bilgilendirme Mesaji</Alert>
        </Grid>
        <Grid size="grow">
          <Alert severity="error">Hata Mesaji</Alert>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid size={7}>
          <Stack sx={{ width: "100%", mb: 2 }} spacing={2}>
            <Alert severity="warning">
              This is a warning alert — better check it out!
            </Alert>
            <Alert severity="info">Bilgilendirme Mesaji</Alert>
          </Stack>
        </Grid>
        <Grid size={3}>
          <Box sx={{ width: "100%", mb: 2 }}>
            <Alert severity="success" variant="outlined">
              AAAAAAA
            </Alert>
          </Box>
        </Grid>
      </Grid>
      <Alert sx={{ width: "250px" }} severity="info" variant="filled">
        <AlertTitle>Basarli</AlertTitle>
        Bilgilendirme Mesaji
      </Alert>
    </div>
  );
}

export default MUIAlert;
