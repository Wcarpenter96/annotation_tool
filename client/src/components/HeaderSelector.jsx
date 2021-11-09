import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateHeader } from "../actions";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  markdownContainer: {
    padding: 40,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const HeaderSelector = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(updateHeader(value || header));
  });

  const [value, setValue] = useState("");

  const header = useSelector((state) => state.task.header);

  if (header) {
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Header</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={setValue}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <div>Loading Selected Header...</div>;
  }
};

export default HeaderSelector;
