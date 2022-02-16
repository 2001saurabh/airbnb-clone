import React from "react";
import Cards from "./Cards";
import "./card.css";
import { Typography } from "@mui/material";

const CardList = ({ cardDetails }) => {
  const cardArray = cardDetails.map((details) => (
    <Cards
      key={details.name}
      name={details.name}
      color={details.color}
      image={details.imageUrl}
      distance={details.distance}
    />
  ));
  return (
    <>
     <div className="cardlist">
      <Typography
        sx={{ fontWeight: 500, fontSize: 42}}
        varient="h2"
      >
        Inspiration for your next trip
      </Typography>
      </div>
      <div class="grid">{cardArray}</div>
    </>
   
    
  );
};

export default CardList;
