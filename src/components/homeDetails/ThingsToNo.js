import { Box } from "@mui/system";
import { Container, Typography, Grid, IconButton } from "@mui/material";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import NoStrollerRoundedIcon from "@mui/icons-material/NoStrollerRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SanitizerRoundedIcon from "@mui/icons-material/SanitizerRounded";
const tonData = [
  {
    title: "House rules",
    info: [
      {
        text: "Check-in: 2:00 pm - 11:00 pm",
        icon: <AccessTimeFilledIcon />,
      },
      {
        text: "Self check-in with building staff",
        icon: <AccessTimeFilledIcon />,
      },
      {
        text: "Not suitable for children and infants",
        icon: <NoStrollerRoundedIcon />,
      },
      {
        text: "No smoking",
        icon: <SmokeFreeIcon />,
      },
      {
        text: "No pets",
        icon: <PetsRoundedIcon />,
      },

      {
        text: "No parties or events",
        icon: <CelebrationRoundedIcon />,
      },
    ],
  },
  {
    title: "Health & safety",
    info: [
      {
        text: "Committed to Airbnb's enhanced cleaning process. Show more",
        icon: <AutoAwesomeRoundedIcon />,
      },
      {
        text: "Airbnb's social distancing and other COVID-19-related guidelines apply",
        icon: <SanitizerRoundedIcon />,
      },
      {
        text: "No carbon monoxide alarm",
        icon: <ErrorRoundedIcon />,
      },
      {
        text: "No smoke alarm",
        icon: <ErrorRoundedIcon />,
      },
      {
        text: "Heights without rails or protection",
        icon: <ErrorRoundedIcon />,
      },
    ],
  },
  {
    title: "Cancellation policy",
    info: [
      {
        text: "Free cancellation before 23 Apr",
      },
    ],
  },
];

function ThingsToNo() {
  return (
    <>
      <Container maxWidth="xl" sx={{ py: 5, mb: 15 }}>
        <Typography sx={{ fontWeight: "500", fontSize: "1.75rem", mb: 2 }}>
          Things to know
        </Typography>

        <Grid container spacing={15}>
          {tonData.map(({ title, info }) => (
            <Grid item lg={4} md={4} sm={8} xs={8} spacing={{ lg: 5, sm: 2 }}>
              <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, my: 2 }}>
                {title}
              </Typography>
              {info.map(({ text, icon }, index) => (
                <Box sx={{ display: "flex", my: 1 }} key={index}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1.25rem", pr: 1 }}
                  >
                    {icon}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "1.25rem" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
              <IconButton
                to="/"
                disableRipple
                // endIcon={}
                sx={{
                  ml: 2,
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
      </Container>
    </>
  );
}

export default ThingsToNo;
