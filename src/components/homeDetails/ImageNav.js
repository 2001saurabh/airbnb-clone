import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import {
  Container,
  IconButton,
  Stack,
  Box,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import React from "react";

function ImageNav() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Container maxWidth="xl">
      <AppBar
        id="navbar"
        position="fixed"
        elevation={0}
        sx={{
          zIndex: 200,
          px:2,
          minHeight: "6vh",
          bgcolor: "white",
          color: "black",
          justifyContent: "space-between",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              //   height: "10rem",
              width: "100%",
            }}
          >
            <IconButton
              onClick={handleBack}
              sx={{
                size: "small",
                color:"black",
                bgcolor: "white",
                // "&:hover": { bgcolor: "white" },
              }}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>

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
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default ImageNav;
