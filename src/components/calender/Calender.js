import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import MuiDateRangePickerDay from "@mui/lab/DateRangePickerDay";
import { alpha, styled } from "@mui/material/styles";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Typography from "@mui/material/Typography";

import DateRangePicker from "@mui/lab/DateRangePicker";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
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
      "border-color",
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

export default function Calender() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <DateRangePicker
          startText="CHECK-IN"
          endText="CHECKOUT"
          calendars={2}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <RedditTextField
                label="CHECK-IN"
                defaultValue="4/15/2022"
                id="reddit-input"
                variant="filled"
                {...startProps}
              />
              <RedditTextField
                label="CHECK-OUT"
                defaultValue="28/15/2022"
                id="reddit-input"
                variant="filled"
                {...endProps}
              />
            </React.Fragment>
          )}
        />
      </div>
    </LocalizationProvider>
  );
}
