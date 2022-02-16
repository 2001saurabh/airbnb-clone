import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import { styled, alpha } from "@mui/material/styles";
import { MenuList, Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={2}
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
    minWidth: 260,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const BootstrapButton = styled(Button)({
  color: "black",
  boxShadow: "#f2f2f2",
  textTransform: "none",
  fontSize: 16,
  marginLeft: 140,
  borderRadius: 30,
  padding: "8px 12px",

  lineHeight: 1.5,
  backgroundColor: "white",
  border: "1px solid #f5f5f5",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "white",
    border: "0.5px solid #f2f2f2",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fff",
  
  },
  "&:focus": {
    boxShadowBottom: "1px solid #f2f2f2",
  },
});

function SearchButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <BootstrapButton
        variant="contained"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // disableElevation
        elevation={0}
        onClick={handleClick}
        endIcon={
          <SearchIcon
            sx={{
              width: 30,
              height: 30,
              ml: 15,
              p: 0.8,
              borderRadius: 20,
            }}
            style={{ backgroundColor: "#ff385c", color: "white" }}
          />
        }
        className="profile-button"
      >
        Start your search
      </BootstrapButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList sx={{ py: 1 }}>
          <MenuItem onClick={handleClose} disableRipple>
            <h5>Sign up</h5>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Log in
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            Host Your Name
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Host Your Experience
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Help
          </MenuItem>
        </MenuList>
      </StyledMenu>
    </div>
  );
}

export default SearchButton;
