import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import image from "../../assets/images/login_bg.png";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = "https://reqres.in/api/login";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container>
        <div className="login__container">
          <Grid item xs={12} sm={5}>
            <Card
              sx={{
                borderRadius: "0px",
              }}
            >
              <div className="form__container">
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Nunito Sans",
                      color: "#030037",
                      textAlign: "center",
                      fontWeight: "800",
                      fontStyle: "normal",
                    }}
                  >
                    Welcome
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                      color: "#686687",
                      textAlign: "center",
                      fontWeight: "400",
                      fontStyle: "normal",
                    }}
                  >
                    Enter your Username and Password.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          const data = {
                            email: values.email,
                            password: values.password,
                          };

                          console.log(data);
                          axios
                            .post(baseURL, data)
                            .then((res) => {
                              console.log(res.data);
                              toast.success("Login Successfull");
                              navigate("/view_clients");
                            })
                            .catch((error) => {
                              toast.error("Missing Password");
                            });

                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <TextField
                            autoFocus
                            InputProps={{
                              startAdornment: (
                                <PersonIcon
                                  position="start"
                                  sx={{ color: "#B8BABC" }}
                                ></PersonIcon>
                              ),
                            }}
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Username"
                            type="email"
                            value={values.email}
                            variant="outlined"
                          />
                          <TextField
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              startAdornment: (
                                <LockIcon
                                  position="start"
                                  sx={{ color: "#B8BABC" }}
                                ></LockIcon>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={Boolean(touched.password && errors.password)}
                            fullWidth
                            helperText={touched.password && errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            variant="outlined"
                          />

                          <Box sx={{ mt: 2 }}>
                            <Button
                              disabled={isSubmitting}
                              sx={{
                                background: "#1334B3",
                                borderRadius: "8px",
                              }}
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "#F8F9FD",
                                  fontWeight: 700,
                                  textTransform: "lowercase",
                                  fontFamily: "Nunito Sans",
                                  textAlign: "center",
                                }}
                              >
                                login
                              </Typography>
                            </Button>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                color: "#686687",
                                fontWeight: 700,
                                fontFamily: "Nunito Sans",
                                textAlign: "center",
                              }}
                            >
                              Forgot Password?
                            </Typography>
                          </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>

                  <div className="tc__container">
                    <Typography sx={{ padding: "5px" }}>
                      Terms of use
                    </Typography>
                    <Typography sx={{ padding: "5px" }}>
                      Privacy policy
                    </Typography>
                  </div>
                  <Box>
                    <Typography sx={{ textAlign: "center" }}>
                      © Punctualiti 2022. All rights reserved
                    </Typography>
                  </Box>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Card sx={{ borderRadius: 0 }}>
              <div className="image__container">
                <CardMedia
                  component="img"
                  image={image}
                  width="100%"
                  alt="main_image"
                ></CardMedia>
                <Box
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2.2rem",
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontFamily: "Nunito Sans",
                      textAlign: "center",
                    }}
                  >
                    360° Solution for Asset Management
                  </Typography>
                  <div className="text__container">
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        color: "#F8F9FD",
                        fontWeight: 400,
                        fontFamily: "Nunito Sans",
                        textAlign: "center",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </div>
                </Box>
              </div>
            </Card>
          </Grid>
        </div>
      </Grid>
      <Toaster />
    </>
  );
}

export default Login;
