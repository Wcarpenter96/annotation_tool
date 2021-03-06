import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HeaderSelector from "./HeaderSelector";
import Instructions from "./Instructions";
import Ontology from "./Ontology";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { saveTask, getTask } from "../actions";
import Loader from "./Loader";
import Tags from "./Tags"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subheading:{
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Edit() {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const description = useSelector((state) => state.task.description);
  const classlist = useSelector((state) => state.task.classes);
  const tags = useSelector((state) => state.task.tags);
  const header = useSelector((state) => state.task.header);

  const onSave = () => {
    dispatch(
      saveTask({
        description: description,
        classes: classlist,
        tags: tags,
        header: header
      })
    );
  };

  const displaySettings = (description, classes, tags, header) => {
    return { description, classes, tags, header };
  };

  if (description) {
    return (
      <div className={classes.root}>
        <div>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<SaveIcon />}
          className={classes.button}
          onClick={onSave}
        >
          <Typography>Save</Typography>
        </Button>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                Data
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography className={classes.subheading}>
                Select the data column that you want to display.
                </Typography>
              </AccordionDetails>
               <HeaderSelector />
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Task Description
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Instructions />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item md={6}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Classifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Ontology />
              </AccordionDetails>
              <AccordionSummary>
              <Typography className={classes.heading}>Tags</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Tags/>
              </AccordionDetails>
            </Accordion>
            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>
                  Crowd Settings (WIP)
                </Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <Loader/>
  }
}
