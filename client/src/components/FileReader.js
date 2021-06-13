import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DropzoneDialog } from "material-ui-dropzone";
import { putUnits } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const FileReader = () => {
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
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Upload Data
      </Button>

      <DropzoneDialog
        acceptedFiles={[".csv"]}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={onClickHandler}
      />
    </div>
  );
};

export default FileReader;
