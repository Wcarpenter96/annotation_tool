import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Data from "./Data";
import Edit from "./Edit";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh'
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  logoutButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  pageContainer: {
    height: '500px',
  },
  btnContainer:{
    position:'absolute',
    bottom:0,
    padding:20,
    backgroundColor:'white'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return ['Upload Data', 'Customize Task', 'Publish Task'];
}

const getStepContent = (step, steps, history) => {
  var content = <Typography>Uh oh! Looks like something went wrong.</Typography>
  switch (steps[step]) {
    case 'Upload Data':
      history.push('/dashboard/data')
      break;
    case 'Customize Task':
      history.push('/dashboard/editor')
      break;
  }
  return content
};

export default function Dashboard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const history = useHistory();
  useEffect(() => getStepContent(activeStep, steps, history), [activeStep])

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="stretch" spacing={1} >
        <Grid item >
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Typography variant="h3" className={classes.title}>
                U+AI
          </Typography>
              <Button className={classes.logoutButton} variant="outlined" color="inherit" href="/api/logout">Logout</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item  >
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)} completed={completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item  >
        <Switch>
            <Route path="/dashboard/data">
              <Data />
            </Route>
            <Route path="/dashboard/editor">
              <Edit />
            </Route>
          </Switch>
        </Grid>
        <Grid direction="row" container justify="space-between" className={classes.btnContainer}>
          <Grid item >
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              Back
              </Button>
          </Grid>
          <Grid item >
            <Button
              variant="contained"
              color="default"
              onClick={handleNext}
              className={classes.button}
            >
              Next
              </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}