import React from "react";
import { Link } from "react-router-dom";
import CardList from "../cards/CardList";
import { cardDetails, BigcardDetails, LargeBanner } from "../cards/CardDetails";
import NavBar from "../navbar/Navbar";
import BigCards from "../cards/BigCards";
import "./home.css";
import Footer from "../footer/Footer";
import { FooterLinks } from "../footer/footerLinks";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  borderRadius: 60,
  lineHeight: 2,
  fontSize: 20,
  textTransform: "none",
  "&:hover": {
    backgroundColor: grey[50],
  },
}));
const LendingPage = () => {
  return (
    <Box
      sx={{
        // // mx: 10,
        // py: 12,
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        // border: '90px solid #000',

        "& > :not(style)": {
          width: "100vw",
          height: "100vh",
        },
      }}
    >
      <Paper
        elevation={1}
        style={{
          backgroundImage: `URL('https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=1920')`,
          backgroundSize: "cover",
          borderRadius: 15,
          // ml:60,
        }}
      >
        <Typography
          varient="body"
          color="white"
          sx={{
            pt: 55,
            fontWeight: 600,
            minWidth: "70vW",
            textAlign: "center",

            fontSize: "44px",
          }}
        >
          Not sure where to go? Perfect.
          <Link to="s/homes/search_mode">
            <ColorButton
              variant="contained"
              size="large"
              sx={{
                display: "block",
                alignItem: "center",
                color: "purple",
                ml: 74,
                my: 5,
                px: 3,
              }}
            >
              I'm flexible
            </ColorButton>
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

function Home() {
  return (
    <div>
      <NavBar />
      <div class="page">
        <div className="main">
          <LendingPage />
        </div>

        <div className="card-list">
          <CardList cardDetails={cardDetails} />
        </div>

        <BigCards BigCardDetails={BigcardDetails} LargeBanner={LargeBanner} />
        <Footer FooterLinks={FooterLinks} />
      </div>
    </div>
  );
}

export default Home;
