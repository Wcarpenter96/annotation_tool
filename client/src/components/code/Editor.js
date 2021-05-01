import React from "react";
import { useSelector } from "react-redux";
import ReactJson from 'react-json-view'


const CodeEditor = () => {
  const annos = useSelector((state) => state.anno);

  return (
    <ReactJson src={annos} />
  );
};

export default CodeEditor;
