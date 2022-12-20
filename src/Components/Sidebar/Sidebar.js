import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Sidebar() {
  const location = useLocation();
  const [col, setCol] = useState("");
  const [col2, setCol2] = useState("");
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [fcol, setFcol] = useState("");
  const [fcol1, setFcol1] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    if (location.pathname === "/view_clients") {
      setCol("#153AC7");
      setCol2("#ffffff");
      setVal("contained");
      setVal2("outlined");
      setFcol("ffffff");
      setFcol1("000000");
    } else {
      setCol2("#153AC7");
      setCol("#ffffff");
      setVal2("contained");
      setVal("outlined");
      setFcol1("ffffff");
      setFcol("000000");
    }
  }, []);
  return (
    <div className="sidebar__container">
      <Box>
        <Typography
          sx={{
            fontSize: "1.6rem",
            color: "#233244",
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            lineHeight: "3.2rem",
          }}
        >
          Company Name
        </Typography>

        <TextField
          InputProps={{
            startAdornment: (
              <SearchIcon
                position="start"
                sx={{ color: "#B8BABC" }}
              ></SearchIcon>
            ),
          }}
          fullWidth
          placeholder="Search Modules"
          name="search"
          type="text"
          variant="outlined"
          size="small"
        />
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "#B8BABC",
            fontFamily: "Nunito Sans",
            fontWeight: 800,
            lineHeight: "3.2rem",
          }}
        >
          Client Master
        </Typography>
        <Box sx={{ "& button": { m: 1 } }}>
          <Link to="/view_clients" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                background: { col },
                borderRadius: "8px",
                fontStyle: "normal",
              }}
              fullWidth
              size="medium"
              variant={val}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontStyle: "normal",
                  color: { fcol },
                  fontWeight: 700,
                  fontFamily: "Nunito Sans",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                View Clients
              </Typography>
            </Button>
          </Link>
          <Link to="/add_clients" style={{ textDecoration: "none" }}>
            <Button
              sx={{ borderRadius: "8px", backgroundColor: { col2 } }}
              fullWidth
              size="medium"
              variant={val2}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: { fcol },
                  fontWeight: 700,
                  fontFamily: "Nunito Sans",
                  textAlign: "center",
                }}
              >
                Add Client
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexgrow: 1,
          position: "fixed",
          top: "90%",
          width: "100%",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ m: 1 }}
        >
          <Avatar alt="Remy Sharp">A</Avatar>
        </StyledBadge>

        <Box sx={{ m: 1 }}>
          {" "}
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#233244",
              fontFamily: "Nunito Sans",
              fontWeight: 700,
            }}
          >
            James Burton
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#233244",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
            }}
          >
            james@thevouchdigital
          </Typography>
        </Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logout />
        </Link>
      </Box>
    </div>
  );
}

export default Sidebar;
