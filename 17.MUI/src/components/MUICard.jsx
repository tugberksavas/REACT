import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import araba from "../images/Lamborghini.jpg";

function MUICard() {
  return (
    <div>
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
  );
}

export default MUICard;
