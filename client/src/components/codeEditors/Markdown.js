import React, { useState, useEffect } from 'react';
import Editor from "rich-markdown-editor";
import { useDispatch, useSelector } from "react-redux";
import { saveTask, getTask } from '../../actions'
import { Skeleton } from '@material-ui/lab';


const Markdown = (props) => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTask());
    }, []);

    const description = useSelector((state) => state.task.description);

    const [value, setValue] = useState(description);
    const handleChange = x => {
        setValue(x)
        props.onChange(x);
    }

    const saveChanges = (value) => {

        dispatch(saveTask({ 'description': value, 'classes': [{ 'cls': 'asdf', 'color': 'ddfd' }], 'tags': ['asdf', 'asdf', 'cdcdd'] }))
    }
    

    if (description) {
        console.log(description)
        return (
            <div>
                <Editor 
                    placeholder="Write your Task Description in Markdown here..."
                    onSave={() => saveChanges(value)}
                    onChange={(x) => handleChange(x)}
                    defaultValue={description} />
            </div>
        );
    } else {
        return (
            <div>...</div>
        )
    }
};

export default Markdown;
