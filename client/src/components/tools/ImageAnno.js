import React, { useEffect, useState } from "react";
import ReactImageAnnotate from "@wcarpenter96/react-image-annotate";


const ImageAnno = () => {
 
  return (
    <ReactImageAnnotate
    taskDescription="testing"
      labelImages
      regionClsList={[]}
      regionTagList={[]}
      images={[
        {
          src: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg"
        }]}
      onChange={() => {}}
      onExit={() => {}}
    />
  );
};

export default ImageAnno;
