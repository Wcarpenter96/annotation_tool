import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DropzoneDialog } from "material-ui-dropzone";
import { putUnits } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const FileReader = () => {
  const dispatch = useDispatch();
  // const [csvfile, setCsvfile] = useState(false);
  const [open, setOpen] = useState(false);

  const onClickHandler = (files) => {
    const csvfile = files[0]
    const data = new FormData();
    data.append("file", csvfile);
    console.log(data);
    dispatch(putUnits(data));
    setOpen(false)
  };

  // const onClickHandler = () => {
  //   const data = new FormData();
  //   data.append("file", csvfile);
  //   console.log(data);
  //   dispatch(putUnits(data));
  // };

  // const onChangeHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   setCsvfile(event.target.files[0]);
  // };

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
      {/* <Button variant="contained" color="primary" onClick={onClickHandler}>
        Upload Data
      </Button>
      <input type="file" name="file" onChange={onChangeHandler}/> */}
    </div>
  );
};

export default FileReader;
