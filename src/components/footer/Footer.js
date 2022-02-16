import React from "react";
import Box from "@mui/material/Box";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";

import {
  Stack,
  styled,
  Typography,
  Link,
  Grid,
  Divider,
  Breadcrumbs,
} from "@mui/material";

const FooterElem = ({ FooterLinks }) => {
  return (
    <Stack direction="row" spacing={17}>
      {FooterLinks.map((el) => (
        <Stack spacing={2}>
          {el.map((link, ind) =>
            ind === 0 ? (
              <Typography variant="h6" fontSize={16}>
                {link}
              </Typography>
            ) : (
              <Link
                sx={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: "black",
                  display: "block",
                  "&:hover": { color: "black", cursor: "pointer" },
                }}
                underline="hover"
              >
                {link}
              </Link>
            )
          )}
        </Stack>
      ))}
    </Stack>
  );
};

function Footer({ FooterLinks }) {
  const breadcrumbs = [
    <Typography>© 2022 Airbnb, Inc.</Typography>,

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
    </Link>,

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
    </Link>,

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
    </Link>,

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
    </Link>,
  ];

  return (
    <>
      <Box
        sx={{
          // display: "flex",
          // flexWrap: "wrap",
          maxHeight: "54vh",
          m: 0,
          p: 0,

          bgcolor: "#F7F7F7",
          "&>:not(style)": {
            ml: 10,
            mr: 15,
            pt: 6,
          },
        }}
      >
        <FooterElem FooterLinks={FooterLinks} />

        <Divider variant="middle" />
      </Box>

      <Box
        sx={{
          display: "block",
          maxHeight: "8vh",
          m: 0,
          p: 0,

          bgcolor: "#F7F7F7",
          "&>:not(style)": {
            mx: 10,
            py: 2,
          },
        }}
      >
        <Stack direction="row" spacing={60}>
          <Stack direction="row" spacing={3}>
            {" "}
            <Breadcrumbs separator="." aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Stack direction="row" spacing={4}>
            <Link
              sx={{
                fontSize: 15,
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
                fontSize: 15,
                fontWeight: 400,
                color: "black",
                display: "flex",
                "&:hover": { color: "black", cursor: "pointer" },
              }}
            >
              <CurrencyRupeeIcon sx={{ mr: 1 }} />
              <Typography text-transform="underline">INR</Typography>
            </Link>
            <Stack >
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
                <FacebookIcon />
              </Link>{" "}
            </Stack >

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
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
