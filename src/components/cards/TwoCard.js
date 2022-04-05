import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";

const TwoCard = ({ BigCardDetails }) => {
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

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          // fontSize: "3.5rem",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
          mt: { xs: "35%", sm: "5%", md: "0", lg: "0" },
          // px: { xs: 2, md: 5, lg: 12 },
          px: "8%",
        }}
      >
        Discover Airbnb Experiences
      </Typography>
      <Box
        sx={{
          display: "flex",
          // flexWrap: { sm: "wrap",xs:"wrap" },

          justifyContent: "space-around",
          width: "100vw",
          height: { lg: "100vh", sm: "60vh", xs: "60vh" },
          mt: 5,
          px: "5%",
        }}
      >
        {BigCardDetails.map((data) => (
          <Box
            key={data.index}
            sx={{
              px: { lg: 1.5 },
              maxWidth: "80rem",
              width: { sm: "45%", lg: "50%" },
              height: { xs: "100%", sm: "50%", lg: "100%" },
              minHeight: { xs: "30rem" },
            }}
          >
            <Paper
              key={data.index}
              elevation={4}
              sx={{
                width: {
                  sm: "100%",
                  md: "auto",
                },
                maxWidth: "70vw",

                height: { lg: "100%", md: "100%", sm: "80%", },
                maxHeight: "100vh",
              }}
              style={{
                backgroundImage: `URL('${data.bgImg}')`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                borderRadius: 15,
                //
              }}
            >
              <Typography
                varient="h2"
                color="white"
                sx={{
                  p: { lg: 10, xs: 4 },

                  fontWeight: 600,
                  fontSize: { md: "2.5rem", sm: "1.2rem" },
                  maxWidth: { lg: "30rem" },
                  display: "block",
                }}
              >
                {data.title}
                <ColorButton
                  variant="contained"
                  sx={{
                    size: { xs: "small", md: "large", lg: "large" },
                    display: "block",
                    mt: "2rem",
                  }}
                >
                  {data.btntitle}
                </ColorButton>
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TwoCard;
