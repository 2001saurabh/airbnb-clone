import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import Box from "@mui/material/Box";
import { Container, Skeleton } from "@mui/material";
// import styles from "./Slick.module.css";
// import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// import { useHistory } from "react-router-dom";
// import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import SlickCard from "./Slick";
import Grid from "@mui/material/Grid";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchList } from "../../api/redux/index";

const itemData = [
  {
    img: "https://a0.muscache.com/im/pictures/60c57c15-9e26-481e-851e-4873ee650b11.jpg?im_w=720",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://a0.muscache.com/im/pictures/55031b6d-bab1-475f-8ed0-e0d202901582.jpg?im_w=720",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://a0.muscache.com/im/pictures/45bcc137-50f6-4a7f-bc3c-c56c10f5fe00.jpg?im_w=720",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://a0.muscache.com/im/pictures/4363673a-39fc-4512-8185-4543f9e434bb.jpg?im_w=720",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://a0.muscache.com/im/pictures/44a540db-356e-4c4d-9d46-32db67817d0b.jpg?im_w=720",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://a0.muscache.com/im/pictures/f75743cc-c6c9-4768-9c92-560e365db1ba.jpg?im_w=720",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://a0.muscache.com/im/pictures/121ea3cd-28e8-4cb9-b9f0-c3dfe5ade234.jpg?im_w=720",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://a0.muscache.com/im/pictures/4c57cf97-9ecc-44c2-9a37-7ef65e89f5b5.jpg?im_w=720",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://a0.muscache.com/im/pictures/dcb0dc47-fdfa-483e-88b7-3804e85ab231.jpg?im_w=720",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://a0.muscache.com/im/pictures/3dee9c18-ad43-4dec-befd-98e69f51a193.jpg?im_w=720",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://a0.muscache.com/im/pictures/f5d38032-e774-4509-8a44-1874262c542c.jpg?im_w=720",
    title: "Sea star",
    author: "@peterlaster",
  },
];

let lat1 = 21.17024;
let lon1 = 72.831062;
function calcCrow(lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

export function DestCard(props) {
  const [sliderRef, setSliderRef] = useState(null);
  const [active, setActive] = useState(0);
  const [mouseMoved, setMouseMoved] = useState(false);
  // const [loading, setLoading] = useState(true);

  const { city, country, price, images, latitude, longitude, loading, id } =
    props;

  function calcCrow(lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  console.log(calcCrow(latitude, longitude));
  const link = "/rooms";

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    initialSlide: 0,

    beforeChange: (current, next) => setActive(next),
  };

  const len = itemData.length;

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(link + "/" + id);
  };

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          // maxWidth: "25rem",
          minWidth: "30%",
          m: 0,
          p: 0,
          maxHeight: "35%",
          cursor: "pointer",
        }}
      >
        <div className="content">
          <Box
            sx={{
              p: 0,
              borderRadius: 10,
              "&:hover .slidbtn": {
                visibility: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                width: "100%",
                px: "2%",
                position: "relative",
                zIndex: 9,
                top: "6rem",
                justifyContent: "flex-end",
              }}
            >
              <IconButton sx={{ color: "black" }}>
                <FavoriteTwoToneIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box
              className="slidbtn"
              sx={{
                display: "inline-flex",
                visibility: "hidden",
                width: "100%",
                px: "2%",
                m: 0,
                position: "relative",
                zIndex: 5,
                top: "13rem",
                justifyContent: "space-between",
              }}
            >
              {active > 0 ? (
                <IconButton
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    width: "30px",
                    padding: "2px",
                    height: "30px",
                    color: "black !important",
                    bgcolor: "#f2f2f2 !important",
                    borderRadius: "50%",
                    border: "0.25px solid #F3F3F3A0",
                  }}
                  onClick={sliderRef?.slickPrev}
                >
                  <ArrowBackIosNewRoundedIcon />
                </IconButton>
              ) : (
                <div style={{ visibility: "hidden" }}></div>
              )}
              {active < len ? (
                <IconButton
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    width: "30px",
                    padding: "2px",
                    height: "30px",
                    color: "black !important",
                    bgcolor: "#f2f2f2 !important",
                    borderRadius: "50%",
                    border: "0.25px solid #F3F3F3A0",
                  }}
                  onClick={sliderRef?.slickNext}
                >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              ) : (
                <></>
              )}
            </Box>

            <Slider
              sx={{ Width: "25rem", width: "100%" }}
              ref={setSliderRef}
              {...sliderSettings}
            >
              {images.map((image) =>
                loading ? (
                  <Skeleton height="35rem" width="23rem" animation="wave" />
                ) : (
                  <Box
                    sx={{
                      height: "25rem",
                      width: "20rem",
                      borderRadius: 6,
                    }}
                  >
                    <img
                      onClick={() => handleClick(id)}
                      key={image.url}
                      src={image.url}
                      alt={image.url}
                      style={{
                        height: "25rem",
                        width: "100%",
                        borderRadius: 12,
                      }}
                      // loading="lazy"
                    />
                  </Box>
                )
              )}
            </Slider>
          </Box>
        </div>

        <CardContent onClick={(id) => handleClick}>
          <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
            <Box sx={{ flexGrow: 1, width: 100 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ textOverflow: "ellipsis" }}
              >
                {city},{country}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {calcCrow({ latitude }, { longitude })}
                kilometer away
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1">₹{price} per night</Typography>
              <Typography variant="body1" color="text.secondary">
                8–15 May
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* </Link> */}
    </>
  );
}

export default DestCard;
