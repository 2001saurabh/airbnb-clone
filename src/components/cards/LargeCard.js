import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function LargeCard({ LargeBanner }) {
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
    <Container maxWidth="xl" sx={{ p: { sm: "0", md: "0", lg: "5%" }, mb: '5%' }}>
      {LargeBanner.map((data) => (
        <Box
          key={data.index}
          sx={{
            // mx: 10,
            // my:"1.5rem",
            // display: "flex",
            // flexWrap: "wrap",
            // maxWidth:"90vw",
            width: "100%",
            height: "100vh",
          }}
        >
          <Paper
            elevation={3}
            style={{
              backgroundImage: `URL('${data.bgImg}')`,
              backgroundSize: "100% 100%",
              height: "100%",
              borderRadius: "1.5rem",
            }}
          >
            <Typography
              variant="body2"
              color="white"
              sx={{
                // m: 5,
                p: 10,
                mb: "5rem",
                fontWeight: 600,
                maxWidth: "40px",
                width: "45%",
                maxHeight: "450px",
                fontSize: "6rem",
              }}
            >
              {data.title}
            </Typography>
            <ColorButton variant="contained" size="large" sx={{ m: "5rem" }}>
              {data.btntitle}
            </ColorButton>
          </Paper>
        </Box>
      ))}
    </Container>
  );
}

export default LargeCard;
