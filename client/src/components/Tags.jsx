import React, { useState, useEffect } from "react";
import ChipInput from 'material-ui-chip-input'
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { updateTags } from "../actions";


const Tags = () => {

    const dispatch = useDispatch();

    const tags = useSelector((state) => state.task.tags);

    const [chips, setChips] = useState(tags);

    useEffect(() => {
        dispatch(updateTags(chips || tags));
    });

    return (
        <Paper>
        <ChipInput
            variant="outlined"
            defaultValue={chips}
            onChange={(x) => setChips(x)}
        />
        </Paper>
    )
}

export default Tags
