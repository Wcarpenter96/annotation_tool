import React, { useState } from 'react';
import marked from "marked";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Editor from "rich-markdown-editor";
import Markdown from "./codeEditors/Markdown";
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import { saveTask } from '../actions'
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    markdownContainer: {
        padding: 40
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const Instructions = (props) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [value, setValue] = useState('');

    const onChange = (x) => {
        setValue(x)
    }

    const saveDescription = (value) => {
        dispatch(saveTask({ 'description': value, 'classes': [{ 'cls': 'asdf', 'color': 'ddfd' }], 'tags': ['asdf', 'asdf', 'cdcdd'] }))
    }

    return (
        <div className={classes.root}>
            <Paper item className={classes.markdownContainer}>
                <Markdown onChange={(x) => { onChange(x) }}/>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                className={classes.button}
                onClick={() => saveDescription(value)}
            ><Typography>Save</Typography></Button>
        </div>
    );
};

export default Instructions;
