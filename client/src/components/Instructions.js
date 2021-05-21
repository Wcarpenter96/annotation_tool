import React, { useState, useEffect } from 'react';
import marked from "marked";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Editor from "rich-markdown-editor";
import Markdown from "./codeEditors/Markdown";
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from "react-redux";
import { saveTask, getTask } from '../actions'


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

const Instructions = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(getTask());
    }, []);

    const description = useSelector((state) => state.task.description);

    const onChange = (x) => {
        setValue(x)
    }

    const onSave = (x) => {
        dispatch(saveTask({ 'description': x, 'classes': [{ 'cls': 'asdf', 'color': 'ddfd' }], 'tags': ['asdf', 'asdf', 'cdcdd'] }))
    }

    if (description){
    return (
        <div className={classes.root}>
            <Paper item className={classes.markdownContainer}>
                <Markdown onSave={(x) => onSave(x)} onChange={(x) => onChange(x)} placeholder="Write your Task Description in Markdown here..." value={description}/>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                className={classes.button}
                onClick={() => onSave(value||description)}
            ><Typography>Save</Typography></Button>
        </div>
    );
    }else{

        return <div>Loading...</div>
    }
};

export default Instructions;
