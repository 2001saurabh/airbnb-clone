import React from "react";
import { Box, Typography, Stack, Divider, Container } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
{
  /* <FontAwesomeIcon icon="fa-solid fa-key" />; */
}

const checkin = [
  {
    icon: <BookmarkBorderIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Self check-in",
    text: "You can check in with the doorperson.",
  },
  {
    icon: <MeetingRoomOutlinedIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Great check-in experience",
    text: "90% of recent guests gave the check-in process a 5-star rating.",
  },
  {
    icon: <BookmarkBorderIcon sx={{ fontSize: "2.5rem" }} />,
    title: "Pool",
    text: "Guests often search for this popular amenity",
  },
];
function CheckIn() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={3} direction="column" gap="5">
        {checkin.map((item, index) => (
          <Box sx={{ display: "flex" }} key={index}>
            {item.icon}
            <Box sx={{ pl: 4, flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "1.25rem", fontWeight: 500 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "dimgray" }}>
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Divider sx={{ maxWidth: "100%", mt: 3 }} />
    </Container>
  );
}

export default CheckIn;
