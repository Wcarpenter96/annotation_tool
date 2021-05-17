import React from "react";
import { useSelector } from "react-redux";
import ReactJson from 'react-json-view'


const CodeEditor = () => {
  const anno = useSelector((state) => state.anno);

  return (
    <ReactJson src={anno} 
    />
  );
};

export default CodeEditor;
