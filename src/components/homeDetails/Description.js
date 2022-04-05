import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Container,
  Button,
} from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { AddBoxRounded } from "@mui/icons-material";
function Description({ description }) {
  return (
    <>
      <Container maxWidth="60%">
        <Box component="div" sx={{ my: 6, fontSize: "1.2rem" }}>
          <Typography gutterBottom sx={{ fontSize: "1.2rem" }}>
            {/* Lod Ubud Villa we surrounded by rice fields, river & jungle. The
            villa is influenced by five star villas: Four Seasons Resort at
            Jimbaran, where me & my brother are part of the design team. */}
            {description}
          </Typography>

          <Box
            component="div"
            sx={{ maxwidth: "60%", whiteSpace: "noWrap", pt: 2 }}
          >
            <Box
              sx={{
                // maxHeight: "10rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              This villa located in south of Ubud with a short drive to Ubud
              Monkey Forest (10 min), Tegenungan Waterfall (15 min), Canggu &
              Seminyak (40 min), Kuta & Airport (50 min).
            </Box>
          </Box>
          <Button
            to="/"
            disableRipple
            endIcon={<ArrowForwardIosRoundedIcon />}
            sx={{
              mt: 2,
              color: "black",
              bgcolor: "white",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
              textTransfrom: "capitalize",
              textDecoration: "underline",
              "&:hover": {
                color: "black",
                bgcolor: "white",
                textDecoration: "underline",
              },
            }}
          >
            Show more
          </Button>
        </Box>
        <Divider variant="middle" />
      </Container>
    </>
  );
}

export default Description;
