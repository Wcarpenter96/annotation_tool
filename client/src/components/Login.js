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
    // textAlign: "center",
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
    justifyContent: "right",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Grid className={classes.banner} item xs={12}>
            <FadeIn transitionDuration={4000}>
              <h1 className={classes.title}>U+AI</h1>
              <h2>An Intelligent CV Labeling Tool</h2>
              <Button variant="outlined" href="/auth/google">
                get started -&gt;
              </Button>
            </FadeIn>
          </Grid>
          <Grid className={classes.paper}>
            <ImageAnno />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid className={classes.paper}>
            <CodeEditor />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
