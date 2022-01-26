import React from "react";
import Cards from "./Cards";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const CardList = ({ cardDetails }) => {
  const cardArray = cardDetails.map((details) => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Cards
            name={details.name}
            color={details.color}
            image={details.imageUrl}
            distance={details.distance}
          />
        </Grid>
      </Grid>
    </Box>
  ));
  return <div>{cardArray}</div>;
};

export default CardList;
