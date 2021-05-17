import React, { useEffect, useState } from "react";
import ReactImageAnnotate from "@wcarpenter96/react-image-annotate";
import { putAnnos } from "../../actions";
import { useDispatch, useSelector } from "react-redux";


const DemoImageAnno = () => {

  const review_from =[
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
    tags: ["machine"],
    type: "box",
    w: 0.28664148351648355,
    x: 0.581713598901099,
    y: 0.06750392464678179,
  }
]
  const [annos, setAnnos] = useState('x');
  const dispatch = useDispatch();
  function get_annos(x) {
    console.log(x)
  }

  return (
    <ReactImageAnnotate
      labelImages
      regionClsList={["Head", "Arm", "Finger"]}
      regionTagList={["machine", "human"]}
      images={[
        {
          src: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg",
          regions: review_from,
        }]}
      onExit={x => dispatch(putAnnos(x.images[0].regions))}
      onChange={x => dispatch(putAnnos(x.images[0].regions))}
    />
  );
};

export default DemoImageAnno;
