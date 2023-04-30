import React, { useState } from "react";
import Cards from "./Cards";

import { Typography, Box, Stack } from "@mui/material";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
// import Carousel from "react-grid-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
};

const CardList = ({ cardDetails }) => {
  const [sliderRef, setSliderRef] = useState(null);
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
      <Box sx={{ m: { xs: 8, md: 8, lg: 10 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", pr: 10 }}>
          <Typography
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              mx: 2,

              pb: 3,
              fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
            }}
            variant="h2"
          >
            Inspiration for your next trip
          </Typography>

          <Stack
            spacing={2}
            direction="row"
            sx={{
              height: "35px",
              width: "35px",
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              disableRipple
              onClick={sliderRef?.slickPrev}
              sx={{
                border: "1px solid #666666",
                fontWeight: "400",
                color: "black",
              }}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
            <IconButton
              onClick={sliderRef?.slickNext}
              disableRipple
              sx={{
                border: "1px solid #555555",
                fontWeight: "400",
                color: "black",
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </Stack>
        </Box>
        {/* <Box sx={{ display: { sx: "flex", md: "flex" } }}></Box> */}
        <Link to="/s/homes/search_mode">
          <Slider {...settings} ref={setSliderRef}>
            {cardDetails.map((details) => (
              <Cards
                key={details.name}
                name={details.name}
                color={details.color}
                image={details.imageUrl}
                distance={details.distance}
              />
            ))}
          </Slider>
        </Link>
      </Box>
    </>
  );
};

export default CardList;
