import { Avatar, Button, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../View_client/view_client.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const cards = [
  {
    name: "ISS Facility Service",
    clients: "4 clients",
    button1: "Add FCM",
    button2: "view all",
    enable: "",
  },
  {
    name: "Infosys",
    clients: "--",
    button1: "Add Client",
    button2: "view all",
    enable: "",
  },
  {
    name: "Sites",
    clients: "--",
    button1: "Go to config",
    button2: "view all",
    enable: "",
  },
  {
    name: "Tenant Groups",
    clients: "--",
    button1: "Add Tenant Group",
    button2: "view all",
    enable: "disabled",
  },
  {
    name: "Tenants",
    clients: "--",
    button1: "Add Tenant",
    button2: "view all",
    enable: "disabled",
  },
];

function FinishModal() {
  return (
    <div className="vclient__container">
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 800,
          fontStyle: "normal",
          fontSize: "1.5rem",
          fontFamily: "Nunito Sans",
        }}
      >
        Add Clients
      </Typography>
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1.1rem",
          fontFamily: "Nunito Sans",
          lineHeight: "2.4rem",
        }}
      >
        Client Master / Add Client / Success
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: "10px" }}>
            <div className="finish__container">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon />
                <Typography
                  sx={{
                    color: "#030037",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "1.1rem",
                    fontFamily: "Nunito Sans",
                    lineHeight: "2.4rem",
                  }}
                >
                  You have successfully added Infosys.
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Link to="/view_clients" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" sx={{ m: 1 }}>
                    Go to Client Master
                  </Button>
                </Link>
                <Link to="/add_clients" style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{ m: 1 }}>
                    {" "}
                    Add More Clients
                  </Button>
                </Link>
              </Box>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {cards.map((option) => (
            <Button>
              <Card>
                <div className="finish__container__comp">
                  <Avatar sx={{ m: 1 }}>{option.name[0]}</Avatar>
                  <Typography>{option.name}</Typography>
                  <Typography sx={{ m: 1, fontSize: "10px" }}>
                    {option.clients}{" "}
                  </Typography>
                  <Button fullWidth variant="contained">
                    {option.button1}
                  </Button>
                  <Button fullWidth>{option.button2}</Button>
                </div>
              </Card>
            </Button>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default FinishModal;
