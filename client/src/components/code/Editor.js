import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-json";
import { useSelector } from "react-redux";
import ReactJson from 'react-json-view'


import "./styles.css";
import "./prism.css";


const CodeEditor = () => {
  const annos = useSelector((state) => state.anno);

  return (
    // <Editor
    //   value={annos}
    //   // onValueChange={(c) => setCode(c)}
    //   highlight={(c) => highlight(c, languages.json)}
    //   padding={10}
    //   style={{
    //     fontFamily: '"Fira code", "Fira Mono", monospace',
    //     fontSize: 12,
    //   }}
    // />
    <ReactJson src={annos} />
  );
};

export default CodeEditor;
