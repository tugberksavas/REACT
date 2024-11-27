import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import araba from "../images/Lamborghini.jpg";

function MUIAccordion() {
  const [expanded, setExpanded] = useState("" | false);
  const handleChange = (panelName) => (event, expanded) => {
    setExpanded(expanded ? panelName : false);
  };

  return (
    <div>
      <div className="Accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Bolum1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt unde minus reprehenderit expedita sapiente porro commodi,
            aliquid saepe aspernatur.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Bolum2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt unde minus reprehenderit expedita sapiente porro commodi,
            aliquid saepe aspernatur.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Bolum3
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt unde minus reprehenderit expedita sapiente porro commodi,
            aliquid saepe aspernatur.
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <hr />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
          <div className="deneme">
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                DENEMEEEEEEE
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus incidunt unde minus reprehenderit expedita sapiente
                porro commodi, aliquid saepe aspernatur.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Bolum2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus incidunt unde minus reprehenderit expedita sapiente
                porro commodi, aliquid saepe aspernatur.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Bolum3
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus incidunt unde minus reprehenderit expedita sapiente
                porro commodi, aliquid saepe aspernatur.
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
          <div className="card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="150"
                image={araba}
                alt="Lamborghini"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lamborghini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lamborghini is a luxury sports car brand that is known for its
                  high-performance vehicles.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Satin Al</Button>
                <Button size="small">Iletisime Gec</Button>
                <Button></Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MUIAccordion;
