import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logoSvg from "../../assests/airbnb.svg";
import { grey } from "@mui/material/colors";
import { Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import ProfileButton from "./profileButton";
import SearchButton from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          borderBottom: "3.5px solid #f5f5f5",
          bgcolor: "white",
          height: 80,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center">
            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: 32,
                  margin: 7,
                }}
                alt="Airbnb logo"
                src={logoSvg}
              />
            </Link>
          </Stack>
          {/* <Stack direction="row" alignItems="center" sx={{ ml: 4 }}>
            <SearchButton />
          </Stack> */}
          <Stack direction="row" alignItems="center" sx={{ px: 8, mx: 0 }}>
            <Link to="/host/homes">
              <Button
                sx={{
                  color: grey[900],
                  textTransform: "none",
                  fontSize: 15,
                  borderRadius: 4,
                }}
              >
                Become a host
              </Button>
            </Link>

            <IconButton sx={{ color: grey[900], mx: 1 }}>
              <LanguageIcon />
            </IconButton>
            <ProfileButton />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
