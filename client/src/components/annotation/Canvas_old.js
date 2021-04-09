import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';


const Canvas = () => {

  const image_url = 'https://cf-315f62h.s3.amazonaws.com/sf_test/1.Catering-Menu_03.jpg'
  
  const [annos, setAnnos] = useState(0);

  useEffect(() => {
    // setAnnos([{left:410,top:860,width:66,height:19}])
    var canvas = initCanvas(image_url)
    // drawCanvas(canvas,annos)
  }, []);

  const initCanvas = (image_url) => {
    var canvas = new fabric.Canvas('canvas',{
        width : 600,
        height : 800
    })
    fabric.Image.fromURL(image_url, function(img) {
        canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas),{
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
         });
        const r = img.scaleX
        const annosr = []
        // annos.forEach(anno => {
        //     annosr.push({
        //         left:anno.left*r,
        //         top:anno.top*r,
        //         width:anno.width*r,
        //         height:anno.height*r,
        //     })
        // })
        // console.log(annosr)
        // setAnnos(annosr)
        // console.log(annos)
    })
    return canvas
  }

  const drawCanvas = (canvas,annos) => {
    console.log(annos)
    annos.forEach(anno => {
        var rect = new fabric.Rect({
            left: anno.left,
            top: anno.top,
            width: anno.width,
            height: anno.height
        })
        canvas.add(rect);
    })
    return canvas 
  }

  return(
    <div>
      <canvas id="canvas" />
    </div>
  );
}

export default Canvas;
