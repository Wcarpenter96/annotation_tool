import React from "react";
import { Draggable } from "react-beautiful-dnd";

const DraggableItem = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          innerRef={provided.innerRef}
        >
        {props.item.cls}-
        {props.item.color}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
