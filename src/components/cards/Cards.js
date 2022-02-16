import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, styled } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1.5),
  [theme.breakpoints.down("xs")]: {
    maxWidth: 250,
    
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 350,
    
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 340,
    
  },
}));

const Cards = (props) => {
  const { name, color, distance, image } = props;
  return (
    <Root>
      <Card
        className="card-array"
        sx={{ maxWidth:370 , borderRadius: 3 }}
      >
        <CardActionArea>
          <CardMedia component="img" height="220" image={image} alt={name} />
          <CardContent
            sx={{ bgcolor: color, padding: 2, color: "white", height: 200 }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
              fontSize="32px"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="whitesmoke" fontSize="20px">
              {distance} Kilometers away
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Root>
  );
};

export default Cards;
