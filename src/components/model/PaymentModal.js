import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Spinner from "react-spinkit";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  borderRadius: 4,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

function PaymentModal({ openModal, handleModalClose }) {
  const navigate = useNavigate();

  const closePayGate = (e) => {
    e.preventDefault();
    setTimeout(() => {
      handleModalClose();
    }, 5000);
    navigate("/");
  };
  return (
    <div>
      <Modal
        open={openModal}
        onChange={closePayGate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card elevation={3} sx={style}>
          <Typography
            sx={{
              //   display: "flex",
              m: "auto",
              width: 300,
              height: 100,
              textAlign: "center",
              //   alignContent: "center",
              fontWeight: "500",
              //   justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            Just a moment , we're getting your trip ready
            <Spinner
              name="ball-pulse-sync"
              style={{
                margin: "2rem",

                textAlign: "center",
                borderRadius: "50%",
              }}
              color="#68043d"
            />
          </Typography>
        </Card>
      </Modal>
    </div>
  );
}

export default PaymentModal;
