import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  TextField,
  FormControl,
  Box,
  Link,
  InputAdornment,
  Breadcrumbs,
  Button,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Calender from "../calender/Calender";
import { GuestCardMenu } from "../menu/GuestMenu";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: false }} {...props} />
))(({ theme }) => ({
  "& label.Mui-focused": {
    border: "none",
    color: "black",
    fontWeight: 600,
  },

  "& .MuiFilledInput-root": {
    border: "1px solid #888",
    overflow: "hidden",
    borderBottomColor: "none",
    borderRadius: 6,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      // "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:focused": {
      border: "none",
    },

    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderBottomColor: "none",
      borderColor: "#000",
      borderWidth: "2px",
    },
    "&.MuiFilledInput-root:after ": {
      border: "none",
    },
  },
}));

function ReserveCard({rating, price,review}) {
  const [anchorResEl, setAnchorResEl] = React.useState(null);
  const openRes = Boolean(anchorResEl);
  const navigate = useNavigate();
  const handleResClose = (event) => {
    event.preventDefault();

    setAnchorResEl(null);
  };
  const handleResClick = (e) => {
    e.preventDefault();
    setAnchorResEl(e.currentTarget);
  };
  const handleReserve = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };
  return (
    <>
      <Box sx={{ boxShadow: 6, mt: 5, borderRadius: 6, position: "sticky" }}>
        <Card
          className="card-array"
          sx={{
            maxWidth: "28rem",
            maxHeight: "50rem",
            // position: "sticky",
            borderRadius: 3,
          }}
          disableRipple
        >
          <CardContent
            sx={{
              padding: 2,
              height: "100%",
            }}
          >
            <Box sx={{ mx: "5%", pt: "4%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  py: "4%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  flexGrow={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "500" }}>
                    ₹{price}
                  </Typography>
                  <Typography variant="body1">/night</Typography>
                </Box>
                <Box>
                  <Breadcrumbs
                    separator="."
                    sx={{ alignItems: "center", color: "black" }}
                    aria-label="breadcrumb"
                  >
                    <Stack direction="row">
                      <StarRoundedIcon sx={{ color: "red" }} />
                      <Typography
                        variant="subtitle1"
                        key="3"
                        color="text.primary"
                        sx={{ alignItems: "center", fontWeight: 700 }}
                      >
                       {rating}
                      </Typography>
                    </Stack>

                    <Link
                      style={{
                        textDecoration: "underline",
                        color: "#333",
                        fontWeight: "600",
                      }}
                      to="/"
                    >
                      ({review} reviews
                    </Link>
                  </Breadcrumbs>
                </Box>
              </Box>
              <Box
                component="form"
                noValidate
                sx={{
                  display: "flex",
                  maxWidth: "30rem",
                }}
              >
                <Calender />
              </Box>
              <Box
                component="form"
                // noValidate
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  component="button"
                  id="demo-customized-button"
                  aria-controls={openRes ? "demo-customized-menu" : undefined}
                  onClick={handleResClick}
                  onClose={handleResClose}
                  aria-haspopup="true"
                  aria-expanded={openRes ? "true" : undefined}
                  sx={{
                    bgcolor: "white",
                    border: "none",
                    width: "100%",
                    p: 0,
                  }}
                >
                  <RedditTextField
                    label="GUESTS"
                    defaultValue="1 guest"
                    id="reddit-input"
                    variant="filled"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            sx={{
                              color: "black",
                              textDecoration: "none",
                              "&:hover": { color: "black" },
                            }}
                          >
                            <KeyboardArrowDownRoundedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Box>
              </Box>
              <GuestCardMenu
                style={{ marginTop: "4rem" }}
                anchorEl={anchorResEl}
                open={openRes}
                handleClose={handleResClose}
              />
              <Button
                onClick={handleReserve}
                disableRipple
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  borderRadius: 3,
                  width: "100%",
                  color: "white",
                  bgcolor: "#e51d57",
                  "&:hover": {
                    bgcolor: "#e51d57",
                    color: "white",
                    opacity: 0.97,
                  },
                }}
              >
                Reserve
              </Button>
              <Typography textAlign="center" sx={{ py: 2 }}>
                You won't be charged yet
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 1,
                    color: "dimgray",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.2rem", textDecoration: "underline" }}
                  >
                    ₹11,690 x 2 nights
                  </Typography>
                  <Typography sx={{ fontSize: "1.2rem" }}>₹23,379</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "dimgray",
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.2rem", textDecoration: "underline" }}
                  >
                    Service fee
                  </Typography>
                  <Typography sx={{ fontSize: "1.2rem" }}>₹0</Typography>
                </Box>
              </Box>
              <Divider sx={{ py: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",

                  py: 1,
                }}
              >
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Total before taxes
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  ₹23,379
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Card sx={{ mt: 2, borderRadius: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              maxWidth: 300,
            }}
          >
            <Typography variant="bold" fontWeight={600}>
              {" "}
              Lower price.{" "}
            </Typography>{" "}
            Your dates are ₹29659 less than the avg. nightly rate of the last 60
            days.
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ReserveCard;
