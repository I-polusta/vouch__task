import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Box,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CreateProfileModal() {
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
            <Grid item xs={12} sx={{ display: "flex" }}>
              <IconButton sx={{ border: "1px solid black", m: 1 }}>
                <AddIcon fontSize="large" />
              </IconButton>
              <Box sx={{ m: 1 }}>
                <Typography
                  sx={{
                    color: "#030037",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "1.1rem",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Company Logo
                </Typography>
                <Typography
                  sx={{
                    color: "#030037",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "0.9rem",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  {" "}
                  Logo ratio shoud be 1:1 and should be 120px X 120 px
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                id="first-name"
                label="Company Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                id="last-name"
                label="Website"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                select
                id="first-name"
                label="Select Business Category"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Hello</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                select
                id="last-name"
                label="Select Facility Management Company"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Hello</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                size="small"
                id="first-name"
                label="Company Email Address"
                variant="outlined"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                size="small"
                id="last-name"
                label="Mobile Number"
                variant="outlined"
                type="number"
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
                id="first-name"
                label="GST Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                id="last-name"
                label="Fax Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default CreateProfileModal;
