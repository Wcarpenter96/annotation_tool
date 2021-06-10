import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DropzoneDialogBase } from "material-ui-dropzone";

const FileReader = () => {
  const [open, setOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);


  const handleChange = (fileObjects) => {
    console.log('onSave', fileObjects);
    setOpen(false);
  };


 

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Upload Data
      </Button>
      <DropzoneDialogBase
        fileObjects={fileObjects}
        acceptedFiles={['.csv']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onAdd={newFileObjs => {
            console.log('onAdd', newFileObjs);
            setFileObjects([].concat(fileObjects, newFileObjs));
          }}
        onDelete={deleteFileObj => {
            console.log('onDelete', deleteFileObj);
          }}
        onClose={() => setOpen(false)}
        onSave={handleChange}
        showPreviews={true}
        showFileNamesInPreview={true}
        filesLimit={1}
      />
    </div>
  );
};

export default FileReader;
