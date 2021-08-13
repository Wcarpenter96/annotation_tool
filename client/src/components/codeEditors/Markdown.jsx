import React, { useState, useEffect } from 'react';
import Editor from "rich-markdown-editor";
import { useDispatch, useSelector } from "react-redux";
import { saveTask, getTask } from '../../actions'
import { Skeleton } from '@material-ui/lab';


const Markdown = (props) => {

    const [value, setValue] = useState(props.value);

    const handleChange = x => {
        setValue(x)
        props.onChange(x);
    }
    
        return (
            <div>
                <Editor 
                    placeholder={props.placeholder}
                    onSave={() => props.onSave(value)}
                    onChange={(x) => handleChange(x)}
                    defaultValue={props.value} />
            </div>
        );
};

export default Markdown;
