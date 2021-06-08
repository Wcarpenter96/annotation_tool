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
import { updateDescription } from '../actions'


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

    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch(updateDescription(value||description))
    });

    const [value, setValue] = useState('');

    const description = useSelector((state) => state.task.description);

    if (description){
    return (
        <div className={classes.root}>
            <Paper item className={classes.markdownContainer}>
                <Markdown  onSave={(x) => console.log(x)} onChange={(x) => setValue(x)} placeholder="Write your Task Description in Markdown here..." value={description}/>
            </Paper>
        </div>
    );
    }else{
        return <div>Loading Description...</div>
    }
};

export default Instructions;
