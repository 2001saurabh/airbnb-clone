import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ResponsiveAppBar from "../navbar/Navbar";

import Amenties from "../homeDetails/Amenties";
import AppsIcon from "@mui/icons-material/Apps";
import { FooterLinks } from "../footer/FooterLinks";
import Spinner from "react-spinkit";
import Footer from "../footer/Footer";
import {
  Typography,
  Box,
  Stack,
  Breadcrumbs,
  Button,
  Divider,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchList } from "../../api/redux/index";
import ReserveCard from "../cards/ReserveCard";
import CheckIn from "../homeDetails/CheckIn";
import Description from "../homeDetails/Description";
import Bedrooms from "../homeDetails/Bedrooms";
import Review from "../homeDetails/Review";
import ReviewCard from "../homeDetails/ReviewCard";
import ThingsToNo from "../homeDetails/ThingsToNo";

const imageData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    // cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    // cols: 1,
  },
];

function srcset(image, size, rows = 2, cols = 1) {
  return {
    src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
  };
}

function HomeDetails(props) {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { list, loading } = useSelector((state) => state.list);

  const query = useParams();
  const id = query.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(`${id}`));
  }, [id]);
  // console.log(query);
  const data = list[0];

  // const { images, name, address, starRating, review } = data;

  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
  }

  const openImagelist = () => {
    navigate("/images/" + id);
  };

  function scrollDown(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }

  return loading ? (
    <Spinner
      name="ball-beat"
      style={{
        marginLeft: "50%",
        marginBottom: "50%",
      }}
    />
  ) : (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{ pt: "7rem", px: "25%" }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {/* Tree house | Duplex | Balcony With Himalayan View  */}
          {data?.name}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", py: 1 }}>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator="."
                sx={{ alignItems: "center", color: "black" }}
                aria-label="breadcrumb"
              >
                <Stack direction="row">
                  <StarRoundedIcon sx={{ color: "red" }} />
                  <Typography
                    variant="subtitle1"
                    key="3"
                    color="text.primary"
                    sx={{ alignItems: "center", px: "1px", fontWeight: 700 }}
                  >
                    {data?.starRating}
                  </Typography>
                </Stack>

                <Link
                  style={{
                    textDecoration: "underline",
                    color: "#333",
                    fontWeight: "600",
                  }}
                  to="/"
                  onClick={handleClick}
                >
                  {data?.review} reviews
                </Link>

                <Link
                  style={{ textDecoration: "underline", color: "gray" }}
                  to="/getting-started/installation/"
                  onClick={handleClick}
                >
                  {data?.address.line1}, {data?.address.city},{" "}
                  {data?.address.countryName}
                </Link>
              </Breadcrumbs>
            </Stack>
          </Box>

          <Stack
            spacing={1}
            direction="row"
            sx={{ justifyContent: "flex-end" }}
          >
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                color: "black",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "whitesmoke",
                  textDecoration: "underline",
                },
              }}
              startIcon={<IosShareIcon />}
            >
              Share
            </Button>
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                color: "black",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "whitesmoke",
                  textDecoration: "underline",
                },
              }}
              startIcon={<FavoriteBorderRoundedIcon />}
            >
              Save
            </Button>
          </Stack>
        </Box>
        <Box>
          <ImageList
            sx={{
              position: "relative",
              width: "100%",
              height: 400,
              borderRadius: 4,
              overflow: "hidden",
            }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {data?.images.map((item) => (
              <ImageListItem
                key={item.url}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{
                  cursor: "pointer",
                  bgcolor: "black",
                  "&:hover": {
                    filter: `brightness(0.93)`,
                  },
                }}
              >
                {/* {item.url ? (
                  <Skeleton height={100} width={200} animation="wave" />
                ) : ( */}
                <img
                  {...srcset(item.url, 400, item.rows, item.cols)}
                  alt={item.title}
                  // loading="lazy"
                  // style={{ backdropFilter: "brightness(0)" }}
                />
                {/* )} */}
              </ImageListItem>
            ))}
            <Button
              // to="s/homes/search_mode?=images"
              onClick={openImagelist}
              variant="contained"
              disableRipple
              size="small"
              startIcon={<AppsIcon />}
              sx={{
                bgcolor: "white",
                color: "black",
                border: "1px solid black",
                borderRadius: 2,
                position: "absolute",
                textTransform: "capitalize",
                bottom: "8%",
                right: "3%",
                "&:hover": {
                  bgcolor: "whitesmoke",
                  color: "black",
                },
              }}
            >
              show all photos
            </Button>
          </ImageList>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            // flexDirection: "column",
            minHeight: "100vh",
            height: "100%",
            // position: "relative",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // position: "relative",
              maxWidth: "60%",
              mb: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                px: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flexGrow: 1, maxWidth: "70%", pt: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  Entire villa hosted by Mega
                </Typography>
                <Typography sx={{ alignSelf: "middle", py: 1 }}>
                  {data?.details}
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: "30%",
                  justifySelf: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link to="/">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    sx={{ width: 56, height: 56 }}
                  />
                </Link>
              </Box>
            </Box>
            <Divider variant="middle" sx={{ maxWidth: "98%", my: 6 }} />
            <Box sx={{ flexGrow: 1, maxHeight: "30vh" }}>
              <CheckIn />
            </Box>

            <Description flexGrow={1}  description={data?.description.short} />
            <Bedrooms flexGrow={1} />
            <Amenties flexGrow={1} amenties={data?.amenities}/>
          </Box>

          <Box
            sx={{
              maxWidth: "40%",
              ml: "5%",
              top: "4rem",
              position: "sticky",
            }}
          >
            <ReserveCard rating={data?.starRating} price= {data?.price} review= {data?.review}/>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 4,
                pt: 0,
                cursor: "pointer",
                color: "dimgray",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                  color: "dimgray",
                },
              }}
            >
              <FlagRoundedIcon />
              <Typography>Report to listing</Typography>
            </Box>
          </Box>
        </Box>
        <Divider variant="middle" sx={{ py: 1 }} />
        <Box sx={{ minHeight: "100vh", height: "100%" }}>
          <Review rating={data?.starRating} price= {data?.price} review= {data?.review} />
          <ReviewCard rating={data?.starRating} price= {data?.price} reviewCount= {data?.review}/>
        </Box>

        {/* <Box sx={{ minHeight: "100vh", height: "100%", my: { lg: 0, sm: 10 } }}> */}
        <ThingsToNo />
        {/* </Box> */}
      </Container>
      <Footer FooterLinks={FooterLinks} />
    </>
  );
}

export default HomeDetails;
