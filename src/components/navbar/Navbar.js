import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import logoSvg from "../../assests/airbnb.svg";
import { grey } from "@mui/material/colors";
import { Button, Stack } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ProfileButton from "./profileButton";
import SearchButton from "./SearchBar";
import { ReactComponent as LogoIcon } from "../../assests/svg/logo.svg";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const path = useLocation();

  const link = path.pathname;
  const index = path.pathname.lastIndexOf("/");
  const isSearchPage = link.slice(index + 1).startsWith("search_mode");
  const isDetailPage = link.slice(index + 1).startsWith("rooms");
  const isCheckout = link.slice(index + 1).startsWith("checkout");

  return (
    <Box sx={{ minWidth: "80vw" }} id="nav">
      <AppBar
        position={isSearchPage ? "absolute" : "fixed"}
        // elevation={4}
        sx={{
          boxShadow: "none",
          borderBottom: "4px solid #f6f6f6",
          bgcolor: "white",
          height: 80,
          zIndex: 500,

          py: 1,
          px: 7,
        }}
      >
        <Container maxWidth={isDetailPage ? "lg" : "xl"}>
          <Toolbar disableGutters>
            <Link to="/">
              <Box
                component="img"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "none", lg: "flex" },
                  height: 32,
                }}
                alt="Airbnb logo"
                src={logoSvg}
              />
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { md: "flex", lg: "none" },
                color: "tomato",
              }}
            >
              <LogoIcon />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", lg: "flex" },
                alignItems: { xs: "center", md: "center", lg: "center" },
                justifyContent: { xs: "left", md: "center" },
              }}
            >
              {isSearchPage || isCheckout ? <></> : <SearchButton />}
            </Box>
            {isCheckout ? (
              <></>
            ) : (
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Stack direction="row" spacing={2}>
                  {/* <Link to="/host/homes"> */}
                    <Button
                      disableRipple
                      sx={{
                        color: grey[900],
                        textTransform: "none",
                        fontSize: { sm: "0.9rem", md: "1rem" },
                        borderRadius: 4,
                        "&:hover": {
                          bgcolor: grey[100],
                        },
                      }}
                    >
                      Become a host
                    </Button>
                  {/* </Link> */}
                </Stack>

                <Stack direction="row" spacing={2}>
                  <IconButton sx={{ color: grey[800], mx: 1 }}>
                    <LanguageIcon />
                  </IconButton>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <ProfileButton />
                </Stack>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
