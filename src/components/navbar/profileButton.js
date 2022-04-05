import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import { MenuList, Typography } from "@mui/material";
import SignUpModal from "../model/SignUpModel";

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
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(255, 0, 0, 0.1) 5px 5px px -3px, rgba(0, 0, 0, 0.05) 0px 4px 10px -2px",
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
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  borderRadius: 20,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  transition: "none",
  backgroundColor: "white",
  borderColor: "#f1f1f1",
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

    boxShadow: "rgba(33, 33, 33, 0.2) 0px 2px 0px 1px",
  },
  "&:active": {
    border: "rgba(33, 33, 33, 0.2) 0px 2px 0px 1px",
  },
  "&:focus": {
    // boxShadow:"rgba(0, 0,0, 0.2) 0px 0px 0px 1px",
  },
});

function ProfileButton() {
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleModalOpen = () => {
    setAnchorEl(null);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  return (
    <div>
      <BootstrapButton
        // variant="contained"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // disableElevation
        disableRipple
        elevation={1}
        onClick={handleClick}
        endIcon={
          <Avatar
            sx={{ width: 30, height: 30, ml: "1px", bgcolor: "dimgray" }}
          />
        }
        startIcon={<MenuIcon />}
        className="profile-button"
      ></BootstrapButton>
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
          <MenuItem onClick={handleModalOpen} disableRipple>
            <h4>Sign up</h4>
          </MenuItem>
          <MenuItem onClick={handleModalOpen} disableRipple>
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
      <SignUpModal openModal={openModal} handleModalClose={handleModalClose} />
    </div>
  );
}

export default ProfileButton;
