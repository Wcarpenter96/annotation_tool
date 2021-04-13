import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-json";

import "./styles.css";
import "./prism.css";

const base_code = `
{
  cls: "Head",
  color: "#f44336",
  editingLabels: false,
  h: 0.3244514106583073,
  highlighted: false,
  id: "648046743083984",
  tags: ["human"],
  type: "box",
  w: 0.2729648315047022,
  x: 0.09740154780564263,
  y: 0.06269592476489028,
},
{
  cls: "Head",
  color: "#f44336",
  editingLabels: false,
  h: 0.3076923076923077,
  highlighted: false,
  id: "146649632879996",
  tags: ["robot"],
  type: "box",
  w: 0.28664148351648355,
  x: 0.581713598901099,
  y: 0.06750392464678179,
}`

const CodeEditor = () => {
  const [code, setCode] = useState(base_code);

  return (
    <Editor
      value={code}
      onValueChange={(c) => setCode(c)}
      highlight={(c) => highlight(c, languages.json)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
};

export default CodeEditor;
