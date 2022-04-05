import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import SubFooter from "../footer/SubFooter";
import CheckoutCard from "../Checkout/CheckoutCard";
import {
  IconButton,
  Container,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  Divider,
  Stack,
  Snackbar,
} from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MasterCard } from "../../assests/svg/mastercard.svg";
import { ReactComponent as Visa } from "../../assests/svg/visa.svg";
import Cancellation from "../Checkout/Cancellation";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PaymentModal from "../model/PaymentModal";

const options = ["Credit or Debit Card"];
const ITEM_HEIGHT = 18;

function Checkout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [openPaymentModal, setOpenPaymentModal] = React.useState(false);

  const navigate = useNavigate();
  const handlePayModalOpen = () => {
    setOpenPaymentModal(true);
    console.log("clicked!!");
  };

  const handlePayModalClose = () => {
    setOpenPaymentModal(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setActive(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    setActive(false);
  };

  const returnPrev = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          height: "100%",
          my: "8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row",
            minHeight: "80vh",
            height: "100%",
            position: "relative",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "block",
              width: "100%",

              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                flexGrow: 1,
                maxWidth: "70%",
                textAlign: "center",
                my: 4,
              }}
            >
              <IconButton
                disableRipple
                onClick={returnPrev}
                sx={{
                  fontWeight: "400",
                  color: "black",
                  height: "50px",
                  width: "50px",
                  "&:hover": {
                    bgcolor: "#f2f2f2",
                  },
                }}
              >
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
              <Typography
                sx={{ fontSize: "2.25rem", pl: 2, fontWeight: "500" }}
              >
                Confirm and pay
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "1.5rem", fontWeight: "600", m: 2 }}>
              Your trip
            </Typography>

            <Box sx={{ m: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: 2,
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography
                    sx={{ fontSize: "1.25rem", fontWeight: 500, mb: 1 }}
                  >
                    Dates
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mb: 1 }}>
                    3-10 Apr
                  </Typography>
                </div>
                <Button
                  variant="text"
                  disableRipple
                  sx={{
                    fonSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "underline",
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Edit
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: 2,
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography
                    sx={{ fontSize: "1.25rem", fontWeight: 500, mb: 1 }}
                  >
                    Dates
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mb: 1 }}>
                    3-10 Apr
                  </Typography>
                </div>
                <Button
                  variant="text"
                  disableRipple
                  sx={{
                    fonSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "underline",
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Edit
                </Button>
              </Box>

              <Divider />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
              >
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  Pay with
                </Typography>
                <Stack direction="row" spacing={1}>
                  <MasterCard style={{ height: "2rem", width: "2rem" }} />
                  <Visa style={{ height: "2rem", width: "2rem" }} />
                </Stack>
              </Box>
              <Box sx={{ my: 3 }}>
                <Button
                  variant="outlined"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  disableRipple
                  startIcon={<CreditCardOutlinedIcon sx={{ color: "gray" }} />}
                  endIcon={
                    active ? (
                      <KeyboardArrowDownOutlinedIcon
                        sx={{
                          ml: "18rem",
                          transform: "rotate(180deg)",
                          transition: "0.2s ease-in",
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownOutlinedIcon sx={{ ml: "18rem" }} />
                    )
                  }
                  sx={{
                    width: "100%",
                    fontSize: "1.25rem",
                    borderColor: "gray",
                    textWrap: "nowrap",
                    borderRadius: 2,
                    p: 1.5,
                    my: 1,
                    // justifyContent: "space-evenly",
                    textTransform: "none",
                    color: "black",
                    "&:hover": {
                      color: "black",
                      borderColor: "lightgray",
                      bgcolor: "white",
                    },
                  }}
                >
                  Credit or Debit Card
                </Button>

                <Button
                  variant="text"
                  sx={{
                    color: "black",
                    bgcolor: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    "&:hover": {
                      color: "black",
                      bgcolor: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Enter a coupon
                </Button>
              </Box>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    maxWidth: "38rem",
                    margin: 2,
                    width: "100%",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    variant="outlined"
                    disableRipple
                    startIcon={
                      <CreditCardOutlinedIcon sx={{ color: "gray" }} />
                    }
                    endIcon={
                      <CheckRoundedIcon
                        sx={{ ml: "18rem", fontSize: "5rem" }}
                      />
                    }
                    sx={{
                      maxWidth: "100%",
                      fontSize: "1.25rem",
                      border: "1px solid gray",
                      textOverflow: "ellipsis",
                      borderRadius: 2,
                      p: 1.5,
                      textTransform: "none",
                      color: "black",
                      bgcolor: "whitesmoke",
                      "&:hover": {
                        color: "black",
                        bgcolor: "whitesmoke",
                        border: "1px solid lightgray",
                      },
                    }}
                    key={option}
                    selected={option === "Credit or Debit Card"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              <Divider />
              <Box sx={{ my: 4 }}>
                <Cancellation />
              </Box>
              <Button
                onClick={handlePayModalOpen}
                disableRipple
                size="large"
                sx={{
                  px: 3,
                  py: 1.5,
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  borderRadius: 3,
                  // width: "100%",
                  color: "white",
                  bgcolor: "#e51d57",
                  "&:hover": {
                    bgcolor: "#e51d57",
                    color: "white",
                    opacity: 0.97,
                  },
                }}
              >
                Request to book
              </Button>

              <PaymentModal
                openModal={openPaymentModal}
                handleModalClose={handlePayModalClose}
              />
            </Box>
          </Box>

          <Box
            sx={{
              maxWidth: "50%",
              ml: "5%",
              top: "4rem",
              position: "sticky",
            }}
          >
            <CheckoutCard />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: "lg",
          height: "5rem",
          px: 8,
          py: 2,
          // display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "whitesmoke",
        }}
      >
        <SubFooter />
      </Box>
    </>
  );
}

export default Checkout;
