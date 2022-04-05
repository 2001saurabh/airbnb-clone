import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import { grey } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  borderRadius: 60,
  lineHeight: 2,
  fontSize: "1rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: grey[50],
  },
}));

function Hero() {
  return (
    <>
      <Grid
        component="section"
        container
        sx={{
          height: { lg: "100%", md: "70%", sm: "70vh", xs: "70vh" },
          width: "100vw",
          // overflow: "hidden",
          bgcolor: "black",
          // py:{xs:'17rem'},
          py: { lg: "7rem", sm: "1rem" },
        }}
      >
        <Box
          component="img"
          src="https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=1920"
          borderRadius="1rem"
          sx={{
            // maxWidth: "90",
            width:'100%',
            minHeight: "70%",
            display: "flex",
            m: "auto",
            objectFit: "fill",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Box
          sx={{
            margin: "0px",
            position: "absolute",
            top: { lg: "70%", md: "55%", xs: "50%" },
            left: "50%",
            transform: {
              lg: "translate(-50%, -50%)",
              md: "translate(-50%, -100%)",
              xs: "translate(-50%, -100%)",
            },
            // border: "2px solid yellow",
            textAlign: "center",
           
          }}
        >
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: { xs: "1rem", md: "2rem", lg: "2.5rem" },
              m: "auto",
              pb: "2",
              fontWeight: 500,
            }}
          >
            Not sure where to go? Perfect.
          </Typography>
          <Link to="s/homes/search_mode" target="_blank">
            <ColorButton
              variant="contained"
              alignItems="center"
              sx={{
                size:  "medium" ,
                textAlign: "center",
                justifySelf: "center",
                color: "purple",
                fontSize: {lg:"1.5rem",md:"1rem"},
                px: 4,
              }}
            >
              I'm flexible
            </ColorButton>
          </Link>
        </Box>
      </Grid>
    </>
  );
}

export default Hero;
