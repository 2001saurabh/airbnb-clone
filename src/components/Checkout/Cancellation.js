import { Typography, Divider, Box,Button } from "@mui/material";
import React from "react";

const LearnMore = () => {
  return (
    <Button
      to="/"
      variant="text"
      sx={{
      
        cursor: "pointer",
        bgcolor:"white",
        color:"black",
        textDecoration: "underline",
        textTransform:"capitalize",
        fontSize: "1rem",
        fontWeight: 600,
        display: "inline",
        '&:hover':{
          color:"black",
          bgcolor:"white",
          textDecoration:"underline"
        }
      }}
    >
      Learn more
    </Button>
  );
};

function Cancellation() {
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
        Cancellation policy
      </Typography>
      <Box sx={{ display: "inline-flex", flexWrap: "wrap", my: 2 }}>
        <Typography>
          Non-refundable: Cancel before check-in and get back only the cleaning
          fee, if you've paid one. <LearnMore />
        </Typography>
      </Box>
      <Box sx={{ display: "inline-flex", flexWrap: "wrap", my: 2 }}>
        <Typography>
          Our Extenuating Circumstances policy does not cover travel disruptions
          caused by COVID-19.
          <LearnMore />
        </Typography>
      </Box>
      <Divider />
    </div>
  );
}

export default Cancellation;
