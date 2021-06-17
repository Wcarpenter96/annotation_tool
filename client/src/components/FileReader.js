import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DropzoneDialog } from "material-ui-dropzone";
import { putUnits } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const FileReader = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onClickHandler = (files) => {
    const csvfile = files[0]
    const data = new FormData();
    data.append("file", csvfile);
    dispatch(putUnits(data));
    setOpen(false)
  };

  return (
    <div>
      <Button startIcon={<CloudUploadIcon/>} className={classes.button} variant="contained" color="primary"  onClick={() => setOpen(true)}>
        Upload
      </Button>
      <DropzoneDialog
        acceptedFiles={[".csv"]}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={onClickHandler}
        dropzoneText={"Drag and drop your .csv file here or click"}
        previewText={"Make sure your .csv has an 'image_url' column with links to your images and does not contain an 'id' column"}
      />
    </div>
  );
};

export default FileReader;
