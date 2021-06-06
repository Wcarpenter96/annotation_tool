import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import { ColorPicker } from "material-ui-color";

const SimpleDialog = (props) => {

  const [className, setClassName] = useState("");

  const getRandColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const [color, setColor] = useState(getRandColor)

  const saveItem = () => {
    props.addItem(className,color)
    props.onClose()
  }

  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>New Class</DialogTitle>
      <TextField
        name="className"
        label="Class Name"
        variant="outlined"
        onChange={(e) => setClassName(e.target.value)}
      />
      <ColorPicker onChange={x => setColor(x.value)} value={color} disableAlpha />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={saveItem}
      >
        <Typography>Save</Typography>
      </Button>
    </Dialog>
  );
};

export default SimpleDialog;
