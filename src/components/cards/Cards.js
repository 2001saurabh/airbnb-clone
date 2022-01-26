import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = (props) => {
  const { name, color, distance, image } = props;
  return (
    <Card className="card-array" sx={{ maxWidth: 300, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent sx={{ bgcolor: color, color: "white", height: 150 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="whitesmoke" fontSize="18px">
            {distance} Kilometers away
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
