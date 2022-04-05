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
    maxHeight: 350,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 350,
    // maxHeight: 350,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 340,
  },
}));

const Cards = (props) => {
  const { name, color, distance, image } = props;
  return (
    <Root>
      <Card className="card-array" sx={{ maxWidth: 370, borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ maxHeight: 200 }}
            image={image}
            alt={name}
          />
          <CardContent
            sx={{
              bgcolor: color,
              padding: 2,
              color: "white",
              height: { sm: 200, md: 150, lg: 200 },
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              // component="div"
              fontWeight="bold"
              sx={{ fontSize: { lg: "2rem", md: "1.2rem" } }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="whitesmoke"
              sx={{ fontSize: { lg: "1.25rem", md: "1rem" } }}
            >
              {distance} Kilometers away
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Root>
  );
};

export default Cards;
