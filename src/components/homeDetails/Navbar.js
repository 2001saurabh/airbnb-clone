import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      id="navbar"
      position="sticky"
      elevation={0}
      sx={{
        zIndex: 200,
        mt: "12vh",
        minHeight: "6vh",
        bgcolor: "white",
        color: "black",
        justifyContent: { md: "center" },
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            alignItems: "center",
            height: "10vh",
            // py: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
