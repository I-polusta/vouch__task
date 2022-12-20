import React from "react";
import {
  Typography,
  TextField,
  Grid,
  MenuItem,
  InputAdornment,
  Box,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
} from "@mui/material";
function PaymentModal() {
  return (
    <>
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 800,
          fontStyle: "normal",
          fontSize: "1.2rem",
          fontFamily: "Nunito Sans",
        }}
      >
        Create Client Profile
      </Typography>
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1.1rem",
          fontFamily: "Nunito Sans",
        }}
      >
        Add some basic information related to the client.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                size="small"
                required
                id="first-name"
                label="Billing Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                select
                id="last-name"
                label="Select State"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Hello</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                size="small"
                required
                select
                id="last-name"
                label="Select City"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Hello</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                size="small"
                required
                id="last-name"
                label="Pincode"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                select
                id="first-name"
                label="Select Number of Site Access"
                variant="outlined"
                fullWidth
              >
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
                <MenuItem>6</MenuItem>
                <MenuItem>7</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                label="With normal TextField"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                id="first-name"
                label="Discount%"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                id="last-name"
                label="Reason"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Payment Options
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="UPI"
                    control={<Radio />}
                    label="UPI"
                  />
                  <FormControlLabel
                    value="Net Banking"
                    control={<Radio />}
                    label="Net Banking"
                  />
                  <FormControlLabel
                    value="Cash"
                    control={<Radio />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="Cheque"
                    control={<Radio />}
                    label="Cheque"
                  />
                  <FormControlLabel
                    value="Others"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Payment Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="paid"
                    control={<Radio />}
                    label="paid"
                  />
                  <FormControlLabel
                    value="pending"
                    control={<Radio />}
                    label="pending"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PaymentModal;
