import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
// import styles from "./Slick.module.css";
// import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export function SlickCard(props) {
  const [sliderRef, setSliderRef] = useState(null);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const { link } = props;
  const sliderSettings = {
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500, 
    lazyLoad: true,
    initialSlide: 0,

    beforeChange: (current, next) => setActive(next),
  };

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
  const len = itemData.length;

  const navigate = useNavigate();

  const [mouseMoved, setMouseMoved] = useState(false);

  const handleClick = () => {
    if (!mouseMoved) {
      navigate(link);
    }
  };

  return (
    // <Container maxWidth="xs" sx={{ p: 0, m: 0 }}>

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
            m: 0,
            position: "relative",
            zIndex: 5,
            top: "8rem",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{ color: "black" }}
            // aria-label={`star ${image.title}`}
          >
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
            top: "17rem",
            justifyContent: "space-between",
          }}
        >
          {active > 0 ? (
            <IconButton
              // className={styles.leftBtn}
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
            <div
              // className={styles.leftBtn}
              style={{ visibility: "hidden" }}
            ></div>
          )}
          {active < len ? (
            <IconButton
              // className={styles.rightBtn}
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
        <Link
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
          onMouseUp={() => handleClick()}
        >
          <Slider
            sx={{ maxWidth: "25rem", width: "100%" }}
            ref={setSliderRef}
            {...sliderSettings}
          >
            {itemData.map((image) => (
              <Box
                component="img"
                // component="a"
                key={image.title}
                src={image.img}
                alt={image.title}
                // actionPosition="left"
                sx={{
                  bgcolor: 4,
                  height: "25rem",
                  width: "20rem",
                  borderRadius: 4,
                }}
              />
            ))}
          </Slider>
        </Link>
      </Box>
    </div>
    
    // </Container>
  );
}

export default SlickCard;
