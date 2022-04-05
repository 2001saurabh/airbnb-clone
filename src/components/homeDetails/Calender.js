import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
} from "@mui/material";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState([null, null]);
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg">
        <Card
          elevation={3}
          sx={{ borderRadius: 3, maxWidth: "100rem", width: "100%", mt: 6 }}
        >
          <CardContent>
            <Typography variant="h6">hbkjakd</Typography>
            <Typography variant="body1" sx={{ color: "dimgray" }}>
              {value}
            </Typography>
            <Typography sx={{ mt: 2, mb: 1 }}>2 calendars</Typography>
            <StaticDateRangePicker
              calendars={2}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <Typography {...startProps}>`${startProps}`</Typography>
                </React.Fragment>
              )}
            />
          </CardContent>
        </Card>
      </Container>
    </LocalizationProvider>
  );
}
