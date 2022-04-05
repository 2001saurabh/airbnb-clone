import React, { useState } from "react";
import Cards from "./Cards";
import "./card.css";
import { Typography, Box, Stack } from "@mui/material";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { IconButton } from "@mui/material";
// import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Grid";
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Demo = ({ cardDetails }) => {
  const [sliderRef, setSliderRef] = useState(null);
 
  return (
    <>
     
        <Grid
          container
          spacing={{ xs: 2, sm: 6 }}
          sx={{ mb: 4 }}
          direction="row"
        >
          <Grid item xs="sm">
            <Typography
              sx={{
                fontWeight: 500,

                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              }}
              varient="h2"
            >
              Inspiration for your next trip
            </Typography>
          </Grid>
          <Grid
            item
            xs="sm"
            direction="row"
            sx={{
              height: "35px",
              width: "35px",
            
              display: { xs: "flex", md: "none", lg: "none" },
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
          </Grid>
        </Grid>
    
    
        <Slider {...settings} ref={setSliderRef} >
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
     
    </>
  );
};

export default Demo;
