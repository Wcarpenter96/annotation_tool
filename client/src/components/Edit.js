import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Instructions from "./Instructions";
import Grid from '@material-ui/core/Grid';
import CodeEditor from "./codeEditors/JSON";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Edit() {
  const classes = useStyles();
  const description = useSelector((state) => state.task.description);

  const displaySettings = (description, classes, tags) => {
    return { description, classes, tags }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <Accordion defaultExpanded	={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Task Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Instructions />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Tool Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ontology and Tags
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Crowd Settings (WIP)</Typography>
            </AccordionSummary>
          </Accordion>
        </Grid>
        <Grid item md={6} >
          <CodeEditor code={displaySettings(description, 'x','y')}/>
        </Grid>
      </Grid>
    </div>
  );
}