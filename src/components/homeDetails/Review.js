import React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { Typography, Box, Stack, Container, Grid } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { alpha, styles } from "@mui/lab/node_modules/@mui/system";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
const reviewData = [
  { feature: "Cleanliness", ratingValue: "5.0" },
  { feature: "Accuracy", ratingValue: "5.0" },
  { feature: "Communication", ratingValue: "4.9" },
  { feature: "Location", ratingValue: "4.7" },
  { feature: "Check-in", ratingValue: "5.0" },
  { feature: "Value", ratingValue: "4.8" },
];

const PrettoSlider = styled(Slider)({
  width: "12rem",
  // width: "100%",
  color: "#000",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const CustomSlider = ({ rating }) => {
  return (
    <PrettoSlider
      valueLabelDisplay="auto"
      aria-label="pretto slider"
      defaultValue={rating}
      max={5}
    />
  );
};
function Review({rating,review,}) {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 3,
          height: "5rem",
          gap: 0.5,
          width: "20rem",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <StarRoundedIcon sx={{ color: "red", mr: 0.5, fontSize: "2rem" }} />
          <Typography
            // key="3"
            color="black"
            sx={{ fontWeight: 500, fontSize: "1.75rem" }}
          >
            {rating}
          </Typography>
        </Stack>
        <Typography variant="body2" textAlign="center">
          <div
            style={{
              height: "5px",
              width: "5px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          />
        </Typography>

        <Typography color="black" sx={{ fontWeight: 500, fontSize: "1.75rem" }}>
          {review} reviews
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {reviewData.map(({ ratingValue, feature }, index) => (
          <Grid item key={index} lg={6} md={6} sm={6} sx={6}>
            <Box
              sx={{
                display: "flex",
                maxWidth: "30rem",
                justifyContent: "space-between",
                // px: 5,
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "1.rem", mr: 6 }}>
                {feature}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <CustomSlider rating={ratingValue} />
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold", m: 1 }}>
                  {ratingValue}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Review;
