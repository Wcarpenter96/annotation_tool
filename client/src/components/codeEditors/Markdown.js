import React from "react";
import Editor from "rich-markdown-editor";


const Markdown = () => {
    
    const markdown = 
    `# Instructions 
    ## Overview 
    ## Rules and Tips 
    ## Examples
    hello
    ` 

    return (
        <Editor placeholder="Write your Task Description in Markdown here..." />
    );
};

export default Markdown;
