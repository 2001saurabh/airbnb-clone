import { Box } from "@mui/system";
import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Typography,
  Stack,
  Container,
  Grid,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const reviewCard = [
  {
    name: "Dylan",
    timeline: "January 2022",
    review:
      "Great place , very unique and cozy. There's not much access to other shops and restraunts or even transport, but Cafe on-site is pretty good, and the beach is walking distance . Food is...",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Yuriy",
    timeline: "March 2022",
    review:
      "This place is awsome and cute and the hosts are Super friendly! The room was spotless. It rained when we were there so it was really cozy inside. The cafe also serves really nice...",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
  {
    name: "Charlie",
    timeline: "January 2021",
    review:
      "This place is awsome and cute and the hosts are Super friendly! The room was spotless. It rained when we were there so it was really cozy inside. The cafe also serves really nice...",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Yuriy",
    timeline: "December 2021",
    review:
      "Incredible experience! If you happen to be in this area, this is a must. It’s super unique and very new inside and out. Check in and check out process was seamless and host is very helpful....",
    src: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dyana",
    timeline: "April 2021",
    review:
      "Incredible experience! If you happen to be in this area, this is a must. It’s super unique and very new inside and out. Check in and check out process was seamless and host is very helpful....",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dyana",
    timeline: "April 2021",
    review:
      "Incredible experience! If you happen to be in this area, this is a must. It’s super unique and very new inside and out. Check in and check out process was seamless and host is very helpful....",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const length = reviewCard.length;
function ReviewCard({ rating, reviewCount }) {
  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Grid container spacing={5}>
        {reviewCard.map(({ src, name, timeline, review }, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src={src}
                sx={{ width: 56, height: 56 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "300",
                  }}
                >
                  {timeline}
                </Typography>
              </Box>
            </Stack>

            <Typography
              sx={{
                my: 1,
                fontSize: "1rem",
                MaxWidth: "30rem",
              }}
            >
              {review}
            </Typography>
            <IconButton
              to="/"
              disableRipple
              // endIcon={}
              sx={{
                ml: -1,
                // border: "1px solid black",
                color: "black",
                bgcolor: "white",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "1.2rem",
                alignItems: "center",
                textTransfrom: "capitalize",
                textDecoration: "underline",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  textDecoration: "underline",
                },
              }}
            >
              Show more <ArrowForwardIosRoundedIcon fontSize="small" />
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        size="large"
        sx={{
          color: "black",
          borderColor: "black",
          borderRadius: 2,
          fontWeight: 600,
          textTransform: "capitalize",
          my: 5,
          py: 1.5,
          "&:hover": {
            color: "black",
            bgcolor: "whitesmoke",
            borderColor: "black",
            fontWeight: "600",
            textDecoration: "underline",
          },
        }}
      >
        Show all {reviewCount} reviews
      </Button>
      <Divider />
    </Container>
  );
}

export default ReviewCard;
