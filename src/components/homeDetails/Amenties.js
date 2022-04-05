import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Container,
  Button,
  Grid,
} from "@mui/material";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";

const ament = [
  {
    title: "Garden view",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Valley view",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Kitchen",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Wifi",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Free carport on premises – 2 spaces",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Private outdoor infinity pool",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Pets allowed",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "32' HDTV with standard cable/satellite",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Window AC unit",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    title: "Security cameras on property",
    icon: <LocalFloristOutlinedIcon sx={{ fontSize: "2rem" }} />,
  },
];
const length = ament.length;
function Amenties({ amenties }) {
  const length = amenties?.length;
  return (
    <div>
      <Container maxWidth="xl" sx={{ my: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 500, py: 2 }}>
          What this place offers
        </Typography>
        <Grid container spacing={3} columnSpacing={1} sx={{ pt: 3 }}>
          {amenties?.map((item, index) => (
            <Grid item lg={6} md={6} sm={6} key={index}>
              <Box sx={{ display: "flex", fontWeight: "300" }}>
                {item.code}
                <Typography sx={{ fontSize: "1.2rem", pl: 2 }}>
                  {item.formatted}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "black",
            borderColor: "black",
            borderRadius: 2,
            fontWeight: "600",
            textTransform: "capitalize",

            mt: 5,
            py: 1.5,
            "&:hover": {
              color: "black",
              bgcolor: "whitesmoke",
              borderColor: "black",
              textDecoration: "underline",
            },
          }}
        >
          Show all {length} amenties
        </Button>
      </Container>
      {/* <Divider variant="middle" /> */}
    </div>
  );
}

export default Amenties;
