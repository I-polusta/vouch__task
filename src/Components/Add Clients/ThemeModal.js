import React, { useState } from "react";
import {
  Typography,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import left from "../../assets/images/left.png";
import center from "../../assets/images/center.png";
import right from "../../assets/images/right.png";
function ThemeModal() {
  const [color, setColor] = useState("#FFFFFF");

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

      <Grid container spacing={2}>
        {" "}
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <OutlinedInput
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <input
                    type="color"
                    id="style2"
                    onChange={(e) => setColor(e.target.value)}
                  />
                  {color}
                </InputAdornment>
              }
            />
            <FormHelperText id="outlined-weight-helper-text">
              Add Hex Value.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography
            sx={{
              color: "#030037",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "1.1rem",
              fontFamily: "Nunito Sans",
            }}
          >
            Login Theme
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
            Select the look and feel of the login page.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup defaultValue="use color">
            <FormControlLabel
              value="use color"
              control={<Radio />}
              label="use color"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <OutlinedInput
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <input
                    type="color"
                    id="style2"
                    onChange={(e) => setColor(e.target.value)}
                  />
                  {color}
                </InputAdornment>
              }
              endAdorment={
                <InputAdornment position="end">
                  <QuestionMark />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography
            sx={{
              color: "#030037",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "1.1rem",
              fontFamily: "Nunito Sans",
            }}
          >
            Where Should be the login modal?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup row defaultValue="left">
            <Grid item xs={4}>
              <div className="radio__control">
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label=<img src={left} className="imgR" alt="tst" />
                />
                <FormHelperText>Left</FormHelperText>
              </div>
            </Grid>
            <grid item xs={4}>
              <div className="radio__control">
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label=<img src={center} className="imgR" alt="tst" />
                />
                <FormHelperText>Center</FormHelperText>
              </div>
            </grid>
            <Grid item xs={4}>
              <div className="radio__control">
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label=<img src={right} className="imgR" alt="tst" />
                />
                <FormHelperText>Right</FormHelperText>
              </div>
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default ThemeModal;
