import {
  CardContent,
  Card,
  CardMedia,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function CheckoutCard() {
  return (
    <>
      <Box sx={{  mt: 5,mr:2, borderRadius: 6,top:'10rem', position: "sticky" }}>
        <Card
          elevation={4}
          sx={{
            borderRadius: 4,
            alignItems: "center",
            maxHeight: "40rem",
            minWidth: "35rem",
            width:"100%",
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", mb: 2 }}>
            <Box
              component="img"
              sx={{ height: "8rem", width: "10rem", borderRadius: 2 }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?aki_policy=large"
              }
              alt="home img"
            />
            <Box sx={{ mx: 2 }}>
              <Typography color="text.secondary">Treehouse</Typography>
              <Typography color="text.primary">Whispering Pines</Typography>
              <Typography>Cottages|Treehouse|Tandi</Typography>
              <Box sx={{ mt: 3, display: "flex" }}>
                <StarRoundedIcon sx={{ color: "red" }} />
                <Typography sx={{ px: 1, fontWeight: "bold" }}>4.9</Typography>
                <Typography color="text.secondary">(180 reviews)</Typography>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", py: 2 }}>
              Price Details
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  color: "dimgray",
                }}
              >
                <Typography
                  sx={{ fontSize: "1rem", textDecoration: "underline" }}
                >
                  ₹11,690 x 2 nights
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>₹23,379</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "dimgray",
                  py: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: "1rem", textDecoration: "underline" }}
                >
                  Service fee
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>₹0</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "dimgray",
                  py: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: "1rem", textDecoration: "underline" }}
                >
                  Occupancy taxes and fees
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>₹21,690</Typography>
              </Box>
            </Box>
            <Divider sx={{ pt: 1 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",

                py: 2,
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                Total (INR)
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                ₹23,379
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default CheckoutCard;
