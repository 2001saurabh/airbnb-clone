import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

export default function BigCards({ BigCardDetails, LargeBanner }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: 8,
    lineHeight: 2,
    fontSize: 16,
    textTransform: "none",
    "&:hover": {
      backgroundColor: grey[400],
    },
  }));
  const BigCards = BigCardDetails.map((data) => (
    <Box
      sx={{
        pl: 3,
        mt:5,


        "& > :not(style)": {
          width: 675,
          height: 675,
        },
      }}
    >
      <Paper
        elevation={1}
        style={{
          backgroundImage: `URL('${data.bgImg}')`,
          backgroundSize: "contain-fit",
          backgroundRepeat: "no-repeat",
          borderRadius: 15,
        }}
      >
        <Typography
          varient="h2"
          color="white"
          sx={{ p: 10, fontWeight: 600, fontSize: "48px", maxWidth: "450px" }}
        >
          {data.title}
          <ColorButton variant="contained" size="large">
            {data.btntitle}
          </ColorButton>
        </Typography>
      </Paper>
    </Box>
  ));
  const LargeCards = LargeBanner.map((data) => (
    <Box
      sx={{
        mx: 10,
        my:12,
        display: "flex",
        flexWrap: "wrap",
        width: "90.5%",

        "& > :not(style)": {
          width: "100vw",
          height: "100vh",
        },
      }}
    >
      <Paper
        elevation={1}
        style={{
          backgroundImage: `URL('${data.bgImg}')`,
          backgroundSize: "cover",
          borderRadius: 15,
        }}
      >
        <Typography
          varient="body"
          color="white"
          sx={{
            m: 5,
            p: 10,
            fontWeight: 600,
            maxWidth: "400px",
            maxHeight: "450px",
            fontSize: "90px",
          }}
        >
          {data.title}
          <ColorButton variant="contained" size="large" sx={{ mt: 20 }}>
            {data.btntitle}
          </ColorButton>
        </Typography>
      </Paper>
    </Box>
  ));

  return (
    <div>
      <Typography
        varient="h2"
        sx={{ pt:8,px:10, fontWeight: 500, fontSize: "40px" }}
      >
        Discover Airbnb Experiences
      </Typography>
      <div
        style={{
          marginLeft: 56,

          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {BigCards}
      </div>
      <div>{LargeCards}</div>
    </div>
  );
}
