import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const DraggableItem = (props) => {
  const draggableId = props.id
  return (
    <Draggable draggableId={draggableId} index={props.index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          innerRef={provided.innerRef}
        >
        {props.item.cls}-
        {props.item.color}
        <Button onClick={() => props.deleteItem(draggableId)}><CloseIcon/></Button>
        </Paper>
      )}
    </Draggable>
  );
};

export default DraggableItem;
