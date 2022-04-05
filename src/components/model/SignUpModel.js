import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, FormControl, InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Spinner from "react-spinkit";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Divider, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { Alert } from "@mui/material";
import { countries } from "./countries";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Apple } from "../../assests/svg/apple.svg";
import { ReactComponent as Email } from "../../assests/svg/email.svg";
import { ReactComponent as Facebook } from "../../assests/svg/facebook-logo-2019.svg";
import { ReactComponent as Google } from "../../assests/svg/google.svg";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& label.Mui-focused": {
    color: "black",
    fontSize: "1.25rem",
  },
  "& label.Mui": {
    color: "black",
    fontSize: "1.25rem",
  },

  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    borderRadius: 12,
    fontSize: "1.2rem",
    overflow: "hidden",
    width: "100%",

    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderColor: "black",
    },
    "&.MuiFilledInput-root:after ": {
      border: "none",
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #444",
    fontSize: 16,
    // maxLength: 0,
    width: "1.5rem",
    padding: "15px 17px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      boxShadow: `${alpha("#000", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#000",
    },
  },
}));

const ButtonData = [
  {
    icon: <Facebook style={{ height: "2rem", width: "2rem" }} />,
    text: "Facebook",
  },
  {
    icon: <Google style={{ height: "2rem", width: "2rem" }} />,
    text: "Google",
  },
  {
    icon: <Apple style={{ height: "2rem", width: "2rem" }} />,
    text: "Apple",
  },
  {
    icon: <Email style={{ height: "2rem", width: "2rem" }} />,
    text: "Email",
  },
];

const style = {
  position: "absolute",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  minHeight: "45rem",
  borderRadius: 4,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const randomOtpGenerator = () => {
  const otpNum = Math.round(Math.random() * 9);
  return otpNum;
};
const otp = Array(6);

function SignUpModal({ openModal, handleModalClose }) {
  const [countryCode, setCountryCode] = React.useState("+1");
  const [phoneNo, setPhoneNo] = React.useState();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [verifyModal, setVerifyModal] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };
  const handleChangePhone = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleOpenVerify = () => {
    setVerifyModal(true);
    handleModalClose();
  };
  const handleCloseVerify = () => {
    setVerifyModal(false);
  };
  const handleSignup = () => {
    handleCloseVerify();
  };
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card elevation={0} sx={style}>
          <IconButton
            onClick={handleModalClose}
            sx={{
              color: "black",
              position: "absolute",
              left: "3%",
              top: "3%",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              // position: "fixed",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: "3rem",
              display: "flex",
            }}
          >
            <Typography variant="h6">Log in or Sign up</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ my: 1, mx: 1, height: "70vh", overflowY: "auto" }}>
            <Typography
              variant="h5"
              sx={{ p: 2, fontWeight: "500", fontSize: "1.75rem" }}
            >
              Welcome to Airbnb
            </Typography>
            <Box sx={{ p: 2 }}>
              <RedditTextField
                label="Country/Region"
                fullWidth
                select
                value={countryCode}
                onChange={handleChange}
                id="reddit-input"
                variant="filled"
                style={{
                  marginTop: 11,
                  color: "gray",
                  padding: 0,
                }}
              >
                {countries.map((option, index) => (
                  <MenuItem
                    key={index}
                    value={option.code}
                    sx={{ color: "black", "&:hover": { bgcolor: "skyblue" } }}
                    disableRipple
                  >
                    {option.name} {option.code}
                  </MenuItem>
                ))}
              </RedditTextField>
              <RedditTextField
                label="Phone number"
                fullWidth
                placeholder="(XXX)-XXX-XXXX"
                value={phoneNo}
                onChange={handleChangePhone}
                id="reddit-input"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {countryCode}
                    </InputAdornment>
                  ),
                }}
                style={{
                  marginTop: 0,
                  color: "gray",
                  padding: 0,
                }}
              />
              <Typography
                variant="caption"
                sx={{ display: "block", mx: 2, mt: 1 }}
              >
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "black",
                  fontWeight: 500,
                  mx: 2,
                }}
              >
                Privacy Policy
              </Typography>

              <Button
                onClick={handleOpenVerify}
                disableRipple
                size="large"
                sx={{
                  mt: 2,
                  px: 3,
                  py: 1.5,
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
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
                Continue
              </Button>

              <Divider variant="middle" sx={{ my: 1.5 }}>
                or
              </Divider>
              {ButtonData.map(({ icon, text }, index) => (
                <Button
                  key={index}
                  // onClick={handleSignup}
                  disableRipple
                  startIcon={icon}
                  size="large"
                  sx={{
                    mb: 1.5,
                    px: 3,
                    py: 1.5,
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: "1rem",
                    border: "1px solid black",
                    borderRadius: 3,
                    width: "100%",
                    color: "black",
                    bgcolor: "white",
                    "&:hover": {
                      color: "black",

                      opacity: 0.97,
                    },
                  }}
                >
                  Continue with {text}
                </Button>
              ))}
            </Box>
          </Box>
        </Card>
      </Modal>
      <Modal
        open={verifyModal}
        onClose={handleCloseVerify}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40rem",
            minHeight: "22rem",
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
          }}
        >
          <IconButton
            onClick={handleCloseVerify}
            sx={{
              color: "black",
              position: "absolute",
              left: "2%",
              top: "5%",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              // position: "fixed",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: "2.5rem",
              display: "flex",
            }}
          >
            <Typography variant="h6">Confirm your number</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ my: 4, px: 1 }}>
            <Typography variant="body1" fontWeight={400}>
              Enter the code we've sent via SMS to {countryCode} {phoneNo}
            </Typography>
            <Box sx={{ display: "flex", my: 3, gap: 1 }}>
              {Array.from({ length: 6 }).map(() => (
                <FormControl variant="standard">
                  <BootstrapInput
                    defaultValue=""
                    value={randomOtpGenerator()}
                    inputProps={{ maxLength: 1 }}
                    id="bootstrap-input"
                  />
                </FormControl>
              ))}
            </Box>
            <Typography variant="body1" fontWeight={400}>
              Haven't received a code?{" "}
              <Typography
                variant="button"
                onClick={handleCloseVerify}
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "underline",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                More options
              </Typography>
            </Typography>

            {isSignUp ? (
              <Alert sx={{ my: 1.5 }} severity="success">
                Sign up or log in successfull!
              </Alert>
            ) : (
              <></>
            )}
            <Button
              onClick={handleSignup}
              variant="outlined"
              fullWidth
              sx={{
                mt: 1,
                p: 1.5,
                color: "black",
                bgcolor: "white",

                borderColor: "black",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  borderColor: "black",
                  borderWidth: "2px",
                  fontWeight: "500",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default SignUpModal;
