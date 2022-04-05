import React from "react";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  Stack,
  Typography,
  Link,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import SubFooter from "./SubFooter";

const Dot = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "4px",

        width: "4px",
        bgcolor: "black",
        borderRadius: "50%",
      }}
    />
  );
};

function Footer({ FooterLinks }) {
  return (
    <Box
      sx={{
        maxHeight: "100rem",
        height: "80%",
        bgcolor: "whitesmoke",
        pb: 5,
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {FooterLinks.map(({ title, link }, index) => (
            <Grid
              item
              key={index}
              lg={3}
              md={3}
              sm={3}
              sx={{ mb: 5, direction: { md: "column", lg: "row" } }}
            >
              <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
                {title}
              </Typography>
              {link.map((links, index) => (
                <Link
                  underline="hover"
                  key={index}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    mt: 2,
                    color: "black",
                    display: "block",
                    "&:hover": { color: "black", cursor: "pointer" },
                  }}
                >
                  {links}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider />
        <SubFooter />
      </Container>
    </Box>
  );
}

export default Footer;
