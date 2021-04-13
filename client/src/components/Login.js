import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ImageAnno from "./annotation/ImageAnno";
import CodeEditor from "./code/Editor";
import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  banner: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    margin: 50,
  },
  title: {
    fontSize: 100,
  },
  nav: {
    justifyContent:"right"
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item justify="flex-end" spacing={1} xs={12}>
          <Button variant="outlined" href="/auth/google">Login with Google</Button>
        </Grid>
        <Grid className={classes.banner} item xs={12}>
          <FadeIn transitionDuration={4000}>
            <h1 className={classes.title}>U+AI</h1>
            <h2>An Intelligent CV Data Labeling Tool</h2>
          </FadeIn>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <ImageAnno />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CodeEditor />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
