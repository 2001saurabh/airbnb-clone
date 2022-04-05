import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import { Divider, MenuItem, Typography, styled } from "@mui/material";
import ResponsiveAppBar from "./Navbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { GuestMenu, MenuScroll } from "../menu/GuestMenu";

import DestinationCard from "../cards/DestinationCard";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import WaterRoundedIcon from "@mui/icons-material/WaterRounded";
import PoolRoundedIcon from "@mui/icons-material/PoolRounded";
import DeckRoundedIcon from "@mui/icons-material/DeckRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VillaRoundedIcon from "@mui/icons-material/VillaRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import DetailsRoundedIcon from "@mui/icons-material/DetailsRounded";
import { useLocation, useNavigate } from "react-router-dom";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
    color: "#000",
    height: "3px",
    mt: "5px",
  },
  "& .Mui-selected": {
    color: "#000",
  },
});

function LinkTab(props) {
  let navigate = useNavigate();
  const { href } = props;

  return (
    <Tab
      component="button"
      disableRipple
      disableFocusRipple
      sx={{
        color: grey[750],
        height: "15px",
        fontSize: "0.85rem",

        "&:hover": {
          color: "black",
        },
        "&:active": {
          color: "black",
        },
        "&:focus": {
          color: "black",
        },
      }}
      onClick={(event) => {
        event.preventDefault();
        navigate(`${href}`);
      }}
      {...props}
    />
  );
}

// const guestmenu = [
//   {
//     title: "Adults",
//     subtitle: "Ages 13 or above",
//   },
//   {
//     title: "Children",
//     subtitle: "Ages 2–12",
//   },
//   {
//     title: "Infants",
//     subtitle: "Under 2",
//   },
//   {
//     title: "Pets",
//     subtitle: " Bringing a service animal?",
//   },
// ];

// const initialCount = {
//   adults: 0,
//   children: 0,
//   infants: 0,
//   pets: 0,
// };

const tabsData = [
  {
    icon: <CabinRoundedIcon sx={{ fontSize: "15px" }} />,
    label: "Farms",
    route: "?type=farms",
  },
  {
    icon: <WaterRoundedIcon />,
    label: "Amazing pools",
    route: "?type=amazing_pools",
  },
  {
    icon: <WbTwilightRoundedIcon />,
    label: "Beachfronts",
    route: "?type=beach%20rooms",
  },
  {
    icon: <HomeRoundedIcon />,
    label: "Cabins",
    route: "?type=cabins%20rooms",
  },
  {
    icon: <VillaRoundedIcon />,
    label: "Tiny homes",
    route: "?type=tiny%20rooms",
  },
  {
    icon: <ViewQuiltRoundedIcon />,
    label: "Containers",
    route: "?type=containers%20rooms",
  },
];

const SecondaryNav = () => {
  const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const [activeGuest, setActiveGuest] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElScroll, setAnchorElScroll] = React.useState(null);

  // const [count, setCount] = React.useState(0);
  const open = Boolean(anchorEl);
  const openMenu = Boolean(anchorElScroll);
  const q = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (e) => {
    setActive(!activeGuest);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setActive(!activeGuest);
    setAnchorEl(null);
  };
  const handleScrollClick = (e) => {
    setActive(!active);
    setAnchorElScroll(e.currentTarget);
  };

  const handleScrollClose = (e) => {
    setActive(!active);
    setAnchorElScroll(null);
  };

  React.useEffect(() => {
    let activeIndex = 0;
    for (let i = 0; i < tabsData.length; i++) {
      if (tabsData[i].route == q.search) {
        activeIndex = i;
        break;
      }
    }
    setValue(activeIndex);
  }, [q]);

  return (
    <AppBar
      id="navbar"
      position="sticky"
      elevation={0}
      sx={{
        zIndex: 200,
        mt: "12vh",
        minHeight: "6vh",
        bgcolor: "white",
        color: "black",
        justifyContent: { md: "center" },
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            alignItems: "center",
            height: "10vh",
            // py: 2,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: "20px",
              minWidth: "30%",
              minHeight: "10px",
              height: "95%",

              alignItems: "center",
            }}
          >
            <AntTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              // scrollButtons
              // allowScrollButtonsMobile
              aria-label="nav tabs example"
            >
              {tabsData.map(({ icon, label, route }, index) => (
                <LinkTab
                  key={index}
                  icon={value === index ? icon : null}
                  sx={{ textAlign: "center" }}
                  iconPosition="start"
                  label={label}
                  href={route}
                >
                  {/* <DestinationCard /> */}
                </LinkTab>
              ))}
              <LinkTab
                icon={<KeyboardArrowDownRoundedIcon />}
                iconPosition="end"
                label="more"
                onClick={handleScrollClick}
                onClose={handleScrollClose}
              ></LinkTab>
            </AntTabs>
          </Box>
          <MenuScroll
            anchorElScroll={anchorElScroll}
            openMenu={openMenu}
            handleScrollClose={handleScrollClose}
          />

          <Box sx={{ flexGrow: 0, justifyContent: "flex-end", pt: 1.25 }}>
            <Button
              variant="outlined"
              // onClick={handleClick}
              // onClose={handleClose}
              disableRipple
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              // elevation={3}
              endIcon={
                active ? (
                  <KeyboardArrowDownRoundedIcon
                    sx={{ transform: "rotate(180deg)" }}
                  />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )
              }
              sx={{
                color: "black",
                borderRadius: "16px",
                mx: 0.5,
                border: "1px solid gray",
                "&:hover": {
                  bgcolor: "white",
                  border: "1px solid black",
                },
                "&:focus": {
                  border: "2px solid black",
                },
              }}
            >
              Anytime
            </Button>
            <Button
              variant="outlined"
              onClick={handleClick}
              onClose={handleClose}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={
                activeGuest ? (
                  <KeyboardArrowDownRoundedIcon
                    sx={{ transform: "rotate(180deg)" }}
                  />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )
              }
              sx={{
                color: "black",
                borderRadius: "16px",
                mx: 0.5,
                border: "1px solid gray",
                "&:hover": {
                  bgcolor: "white",
                  border: "1px solid black",
                },
                "&:active": {
                  border: "2px solid black",
                },
              }}
            >
              Guests
            </Button>
            <Button
              // onClick={handleClick}
              // onClose={handleClose}
              startIcon={<TuneRoundedIcon />}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                color: "black",
                borderRadius: "16px",
                mx: 0.5,
                border: "1px solid gray",
                "&:hover": {
                  bgcolor: "white",
                  border: "1px solid black",
                },
                "&:active": {
                  border: "2px solid black",
                },
              }}
            >
              filter
            </Button>
          </Box>
          <GuestMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
function ListNavbar() {
  return (
    <>
      <ResponsiveAppBar />

      <SecondaryNav />
    </>
  );
}

export default ListNavbar;
