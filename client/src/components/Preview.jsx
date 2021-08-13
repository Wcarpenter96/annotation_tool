import React, { useEffect } from "react";
import Loader from './Loader'
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../actions";
import ReactImageAnnotate from "@wcarpenter96/react-image-annotate";

const Preview = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTask());
    }, []);

    const task = useSelector((state) => state.task) || {'description':false,'classes':false,'tags':false,'units':false};
    const { description, classes, tags, units } = task

    const getClasslist = () => {
        const classlist = []
        if (classes) {
            classes.forEach(c => {
                classlist.push(c.cls)
            })
            return classlist
        } else {
            return classlist
        }
    }
    
    if (description){
    return (
        <ReactImageAnnotate
            taskDescription={description}
            labelImages
            regionClsList={getClasslist()}
            regionTagList={tags}
            images={[
                {
                src: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg"
                }]}
            onChange={() => {}}
            onExit={() => {}}
    />
    )
    } else {
        return <Loader/>
    }
}

export default Preview
