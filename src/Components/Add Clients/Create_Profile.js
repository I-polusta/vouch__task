import React, { useState } from "react";
import "../View_client/view_client.css";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Paper,
} from "@mui/material";
import { Form, Formik } from "formik";
import "./create_profile.css";
import { useNavigate } from "react-router-dom";
import CreateProfileModal from "./CreateProfileModal";
import PaymentModal from "./PaymentModal";
import ThemeModal from "./ThemeModal";
import ModuleModal from "./ModuleModal";
function getSteps() {
  return ["Create Profile", "Payment Setup", "Theme Setup", "Modules Setup"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateProfileModal />;

    case 1:
      return <PaymentModal />;
    case 2:
      return <ThemeModal />;
    case 3:
      return <ModuleModal />;
    default:
      return "unknown step";
  }
}
function getStepName(step) {
  switch (step) {
    case 0:
      return "Create Profile";

    case 1:
      return "Payment Setup";
    case 2:
      return "Theme Setup";
    case 3:
      return "Modules Setup";
    case 4:
      return "Success";
    default:
      return "unknown step";
  }
}
const Create_Profile = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      setActiveStep(activeStep + 1);

      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="vclient__container">
      {" "}
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
        Client Master / Add Client / {getStepName(activeStep)}
      </Typography>
      <Paper sx={{ p: "20px" }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};

            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          navigate("/addClients/success")
        ) : (
          <>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ handleReset }) => (
                <Form>
                  {getStepContent(activeStep)}
                  <Grid container spacing={6} sx={{ mt: "1px" }}>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        disabled={activeStep === 0}
                        onClick={handleBack}
                      >
                        back
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        // type="submit"
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </>
        )}
      </Paper>
    </div>
  );
};

export default Create_Profile;
