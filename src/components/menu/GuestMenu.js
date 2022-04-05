import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { styled, alpha } from "@mui/material/styles";
import {
  MenuList,
  Typography,
  Menu,
  Stack,
  IconButton,
  Divider,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

const guestmenu = [
  {
    title: "Adults",
    subtitle: "Ages 13 or above",
  },
  {
    title: "Children",
    subtitle: "Ages 2–12",
  },
  {
    title: "Infants",
    subtitle: "Under 2",
  },
  {
    title: "Pets",
    subtitle: " Bringing a service animal?",
  },
];

const initialCount = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: "20rem",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(255, 0, 0, 0.1) 5px 5px px -3px, rgba(0, 0, 0, 0.05) 0px 4px 10px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(0),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
}));

const StyledMenuCard = styled((props) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    // position: "relative",
    marginTop: theme.spacing(3),
    maxWidth: "45rem",
    // maxHeight: "25rem",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(255, 0, 0, 0.1) 5px 5px px -3px, rgba(0, 0, 0, 0.05) 0px 4px 10px -2px",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(0),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
}));

const options = [
  "Cycladic homes",
  "Castles",
  "Domes",
  "Islands",
  "Luxe",
  "Houseboats",
  "Kezhans",
  "Off-the-grid",
  "Barns",
  "Ryokans",
  "Campervans",
  "Yurts",
  "Trulli",
  "Boats",
  "Ski-in/Ski-out",
];
const ItemHeight = 55;
function MenuScroll({ anchorElScroll, handleScrollClose, openMenu }) {
  return (
    <>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorElScroll}
        open={openMenu}
        onClose={handleScrollClose}
        PaperProps={{
          style: {
            maxHeight: ItemHeight * 7,
            width: "25rem",
          },
        }}
      >
        <MenuList sx={{ py: 2 }}>
          {options.map((option, index) => (
            <MenuItem
              onClick={handleScrollClose}
              key={index}
              disableRipple
              sx={{
                fontSize: "1.5rem",
                borderRadius: "4px",
                "&:hover": { bgcolor: "whitesmoke" },
              }}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </StyledMenu>
    </>
  );
}

function GuestMenu({ anchorEl, handleClose, open }) {
  const [counts, setCounts] = React.useState(initialCount);

  const reduceCount = (name) => {
    let curr = counts[name];
    setCounts({ ...counts, [name]: curr - 1 });
  };
  const addCount = (name) => {
    let curr = counts[name];
    setCounts({ ...counts, [name]: curr + 1 });
  };

  return (
    <>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList sx={{ p: 2 }}>
          {guestmenu.map(({ title, subtitle, text }, index) => (
            <div key={index}>
              <MenuItem
                disableRipple
                disableFocusRipple
                // key={index}
                sx={{ width: "360px", justifyContent: "center" }}
              >
                <Stack
                  // spacing={10}
                  direction="row"
                  sx={{ width: "100%", justifyContent: "space-between" }}
                >
                  <Stack spacing={0} direction="column">
                    <Typography gutterBottom variant="h6" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {subtitle}
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    {/* <Stack> */}
                    <IconButton
                      disableRipple
                      disableFocusRipple
                      disabled={
                        counts[title.toLowerCase()] === 0 ? true : false
                      }
                      variant="contained"
                      sx={{ border: "1px solid black" }}
                      // {...count<0? disabled={true}:disabled={false}}
                      onClick={() => reduceCount(title.toLowerCase())}
                    >
                      <RemoveRoundedIcon />
                    </IconButton>

                    <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
                      {counts[title.toLowerCase()] < 0
                        ? 0
                        : counts[title.toLowerCase()]}
                    </Typography>

                    <IconButton
                      disableRipple
                      disableFocusRipple
                      sx={{
                        border: "1px solid black",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                      onClick={() => addCount(title.toLowerCase())}
                    >
                      <AddRoundedIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </MenuItem>
              <Divider variant="middle" />
            </div>
          ))}
          <Typography
            variant="body1"
            sx={{
              p: 2,
              color: "text.secondary",

              // m: "auto",
              // display: "flex",
              // flexWrap: "wrap",
              width: 360,
            }}
          >
            If you're lucky enough to have more than 2 pets with you, be sure to
            let your host know.
          </Typography>
          <Divider variant="middle" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // m: "auto",
              fontSize: "2rem",
              pt: 2,
            }}
          >
            <Button
              variant="text"
              disableRipple
              disabled
              size="large"
              sx={{
                color: "black",
                textDecoration: "underline",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  textDecoration: "underline",
                },
              }}
            >
              clear
            </Button>
            <Button
              variant="contained"
              disableRipple
              size="large"
              sx={{
                color: "white",
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "black",
                  color: "whitesmoke",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </MenuList>
      </StyledMenu>
    </>
  );
}

function GuestCardMenu({ anchorEl, handleClose, open }) {
  const [counts, setCounts] = React.useState(initialCount);

  const reduceCount = (name) => {
    let curr = counts[name];
    setCounts({ ...counts, [name]: curr - 1 });
  };
  const addCount = (name) => {
    let curr = counts[name];
    setCounts({ ...counts, [name]: curr + 1 });
  };

  const handleClear = (name) => {
    setCounts(initialCount);
  };
  return (
    <>
      <StyledMenuCard
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          {guestmenu.map(({ title, subtitle, text }, index) => (
            <div key={index}>
              <MenuItem
                disableRipple
                disableFocusRipple
                // key={index}
                sx={{ width: 350, justifyContent: "center" }}
              >
                <Stack
                  // spacing={10}
                  direction="row"
                  sx={{ width: "100%", justifyContent: "space-between" }}
                >
                  <Stack spacing={0} direction="column">
                    <Typography gutterBottom variant="h6" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {subtitle}
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    {/* <Stack> */}
                    <IconButton
                      disableRipple
                      disableFocusRipple
                      disabled={
                        counts[title.toLowerCase()] === 0 ? true : false
                      }
                      variant="contained"
                      sx={{ border: "1px solid black" }}
                      // {...count<0? disabled={true}:disabled={false}}
                      onClick={() => reduceCount(title.toLowerCase())}
                    >
                      <RemoveRoundedIcon />
                    </IconButton>

                    <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                      {counts[title.toLowerCase()] < 0
                        ? 0
                        : counts[title.toLowerCase()]}
                    </Typography>

                    <IconButton
                      disableRipple
                      disableFocusRipple
                      sx={{
                        border: "1px solid black",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                      onClick={() => addCount(title.toLowerCase())}
                    >
                      <AddRoundedIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </MenuItem>
              <Divider variant="middle" />
            </div>
          ))}
          {/* <Typography
            variant="body1"
            sx={{
              p: 2,
              color: "text.secondary",

              // m: "auto",
              // display: "flex",
              // flexWrap: "wrap",
              width: 200,
            }}
          >
            If you're lucky enough to have more than 2 pets with you, be sure to
            let your host know.
          </Typography> */}
          {/* <Divider variant="middle" /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              // m: "auto",
              fontSize: "1rem",
              // pt: 1,
            }}
          >
            <Button
              variant="text"
              disableRipple
              onClick={handleClear}
              size="large"
              sx={{
                color: "black",
                textDecoration: "underline",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  textDecoration: "underline",
                },
              }}
            >
              clear
            </Button>
          </Box>
        </MenuList>
      </StyledMenuCard>
    </>
  );
}

export { GuestMenu, MenuScroll, GuestCardMenu };
