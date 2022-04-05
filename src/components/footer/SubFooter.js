import React from "react";
import Box from "@mui/material/Box";
// import FooterLinks from "./FooterLinks";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Stack, Typography, Link, Container } from "@mui/material";

const Dot = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "4px",

        width: "4px",
        bgcolor: "black",
        borderRadius: "50%",
      }}
    />
  );
};

function SubFooter() {
  return (
    <>
      {/* <Container maxWidth="lg" sx={{ bgcolor: "whitesmoke" }}> */}
      <Box
        sx={{
          display: "flex",
          // height: "5rem",

          justifyContent: "space-between",
          mt: 2,
          textAlign: "center",
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography>© 2022 Airbnb, Inc.</Typography>
          <Dot />
          <Link
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 300,
              color: "black",
              display: "block",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            Privacy
          </Link>
          <Dot />
          <Link
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 300,
              color: "black",
              display: "block",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            Terms
          </Link>
          <Dot />
          <Link
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 300,
              color: "black",
              display: "block",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            Sitemap
          </Link>
          <Dot />
          <Link
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 300,
              color: "black",
              display: "block",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            Company Details
          </Link>
        </Stack>
        {/* <Stack> */}
        <Stack direction="row" spacing={3}>
          <Link
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "black",
              display: "flex",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            <LanguageIcon sx={{ mr: 1 }} />
            <Typography>English (IN)</Typography>
          </Link>

          <Link
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "black",
              display: "flex",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            <CurrencyRupeeIcon sx={{ mr: 1 }} />
            <Typography text-transform="underline">INR</Typography>
          </Link>
          <Stack>
            <Link
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "black",
                display: "flex",
                "&:hover": { color: "black", cursor: "pointer" },
              }}
            >
              {" "}
              <FacebookIcon />
            </Link>
          </Stack>

          <Link
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "black",
              display: "flex",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            {" "}
            <TwitterIcon />
          </Link>
          <Link
            sx={{
              fontSize: 15,
              fontWeight: 400,
              color: "black",
              display: "flex",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          >
            {" "}
            <InstagramIcon />
          </Link>
        </Stack>
        {/* </Stack> */}
      </Box>
      {/* </Container> */}
    </>
  );
}

export default SubFooter;
