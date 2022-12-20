import React from "react";
import {
  Typography,
  Button,
  Grid,
  FormGroup,
  Card,
  FormControlLabel,
  Box,
  Checkbox,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
function ModuleModal() {
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
        Modules Setup
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
        Select the modules that the client can use..
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Home/Dashboard"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Helpdesk"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Assets"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "1px",
                border: "1px solid black",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Daily Tasks"
              />
              <KeyboardArrowRightIcon />
            </Box>
            <FormControlLabel control={<Checkbox />} label="PPM" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Employees"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Profile"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Transanctions"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Card sx={{ p: "15px", height: "40vh", overflowY: "scroll" }}>
            <div className="modal__container">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <SportsVolleyballIcon fontSize="large" sx={{ m: 1 }} />
                <Box>
                  <Typography
                    sx={{
                      color: "#030037",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "1.1rem",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Daily Tasks
                  </Typography>
                  <Typography
                    sx={{
                      color: "#030037",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "0.8rem",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Select the sub modules that the client can use.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant="contained"
                  startIcon={<DoneIcon />}
                >
                  visible
                </Button>
              </Box>
            </div>
            <Grid Container spacing={2}>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Show all Submodules"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Summary"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="View Tasks"
                  />

                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Create new Tasks"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Logbook"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Logsheet"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Summary"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="View Tasks"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ModuleModal;
