import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { ColorPicker } from "material-ui-color";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  title: {
    margin: 'auto',
    paddingTop: theme.spacing(4)
  },
  classInput:{
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  button:{
    margin: theme.spacing(4),
  }
}));

const SimpleDialog = (props) => {

  const classes = useStyles();

  const [className, setClassName] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false)

  const getRandColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const [color, setColor] = useState(getRandColor());

  const onChangeHandler = (e) => {
    setClassName(e.target.value)
    setHelperText("")
    setError(false)
  } 

  const saveItem = () => {
    if (!className){
      setHelperText("Class Name cannot be blank")
      setError(true)
      return
    }
    props.addItem(className, color);
    setClassName("")
    props.onClose()
    setColor(getRandColor());
  };

  return (
    <Dialog className={classes.root} onClose={props.onClose} open={props.open}>
      <DialogTitle className={classes.title} >New Class</DialogTitle>
      <TextField className={classes.classInput}
        error={error}
        name="className"
        label="Class Name"
        variant="outlined"
        onChange={onChangeHandler}
        helperText={helperText}
      />
      <ColorPicker className={classes.colorPicker}
        onChange={(x) => setColor(x.css.backgroundColor)}
        value={color}
        disableAlpha
      />
      <Button className={classes.button}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddIcon />}
        onClick={saveItem}
      >
        <Typography>Add</Typography>
      </Button>
    </Dialog>
  );
};

export default SimpleDialog;
