import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useHistory } from "react-router-dom";
import Data from "./Data";
import Edit from "./Edit";
import Publish from "./Publish";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  title: {
    flexGrow: 1,
  },
  lButton: {
    position: 'fixed',
    bottom: theme.spacing(3),
    left: theme.spacing(3),
  },
  rButton: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  previewButton: {
    marginRight: theme.spacing(1),
  },
  logoutButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    backgroundColor: "white",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Dashboard() {
  const steps = [
    { label: "Upload Data", path: "/dashboard/data" },
    { label: "Customize Task", path: "/dashboard/editor" },
    { label: "Publish Task", path: "/dashboard/publish" },
  ];
  const classes = useStyles();
  const history = useHistory();

  const activeStep = () => {
    const href = window.location.href.toString();
    for (var i = 0; i < steps.length; i++) {
      if (href.includes(steps[i]["path"])) {
        return i;
      }
    }
    return 0;
  };

  const handleStep = (path) => {
    history.push(path);
  };

  const handleNext = () => {
    const href = window.location.href.toString();
    let j = -1;
    for (var i = 0; i < steps.length - 1; i++) {
      if (href.includes(steps[i]["path"])) {
        j = i;
      }
    }
    history.push(steps[j + 1]["path"]);
  };

  const handleBack = () => {
    const href = window.location.href.toString();
    let j = steps.length;
    for (var i = 1; i < steps.length; i++) {
      if (href.includes(steps[i]["path"])) {
        j = i;
      }
    }
    history.push(steps[j - 1]["path"]);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Typography variant="h3" className={classes.title}>
                U+AI
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<VisibilityIcon />}
                className={classes.previewButton}
                onClick={() => console.log("hi")}
                disabled={true}
              >
                <Typography>Preview</Typography>
              </Button>
              <Button
                className={classes.logoutButton}
                variant="outlined"
                color="inherit"
                href="/api/logout"
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item>
          <Stepper nonLinear activeStep={activeStep()}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepButton onClick={() => handleStep(step["path"])}>
                  {step["label"]}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item>
          <Switch>
            <Route path="/dashboard/data">
              <Data />
            </Route>
            <Route path="/dashboard/editor">
              <Edit />
            </Route>
            <Route path="/dashboard/publish">
              <Publish />
            </Route>
          </Switch>
        </Grid>
      </Grid>
      <Fab
        size="large"
        variant="extended"
        className={classes.lButton}
        onClick={handleBack}
      >
        &lt; Back 
      </Fab>
      <Fab
        size="large"
        variant="extended"
        className={classes.rButton}
        onClick={handleNext}
      >
        Next &gt;
      </Fab>
    </div>
  );
}
