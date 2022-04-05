import { Container, Typography, Box, Divider } from "@mui/material";
import React from "react";

function Bedrooms() {
  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: "1.2rem", my: 2 }}
        >
          Where you'll sleep
        </Typography>
        <Box
          component="img"
          src={
            "https://a0.muscache.com/im/pictures/fb1dc14b-a99a-4156-a3c7-b3ca4a7011cb.jpg?im_w=720"
          }
          sx={{ borderRadius: 4, height: "15rem", width: "25rem" }}
        />
        <Typography variant="h6">Bedroom</Typography>
        <Typography>1 king bed</Typography>
      </Container>
      <Divider variant="middle" />
    </>
  );
}

export default Bedrooms;
