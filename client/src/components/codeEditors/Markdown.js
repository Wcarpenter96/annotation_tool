import React from "react";
import Editor from "rich-markdown-editor";
import { useDispatch, useSelector } from "react-redux";
import { updateDescription } from '../../actions'
import { saveTask } from '../../actions'


const Markdown = () => {

    const dispatch = useDispatch();

    var description = useSelector((state) => state.task.description);

    const saveChanges = (description) => {

        dispatch(saveTask({ 'description': description, 'classes': [{ 'cls': 'asdf', 'color': 'ddfd' }], 'tags': ['asdf', 'asdf', 'cdcdd'] }))
    }

    const updateChanges = (state) => {
        dispatch(updateDescription((state())))
    }
    return (
        <Editor placeholder="Write your Task Description in Markdown here..." 
        onSave={() => saveChanges(description)}
        onChange={(state) => updateChanges(state)} />
    );
};

export default Markdown;
