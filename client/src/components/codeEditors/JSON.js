import React from "react";
import ReactJson from 'react-json-view'


const CodeEditor = ({code}) => {

  return (
    <ReactJson src={code} name={false}
    />
  );
};

export default CodeEditor;
