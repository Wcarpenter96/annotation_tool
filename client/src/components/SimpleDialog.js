import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import { MaterialPicker } from "react-color";
import { ColorPicker } from 'material-ui-color';

const SimpleDialog = (props) => {
  const getRandColor = () => {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>New Class</DialogTitle>
      <form noValidate autoComplete="off">
        <TextField id="className" label="Class Name" variant="outlined" />
      </form>
      <ColorPicker defaultValue={getRandColor()} disableAlpha />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => console.log("test")}
      >
        <Typography>Save</Typography>
      </Button>
    </Dialog>
  );
};

export default SimpleDialog;
