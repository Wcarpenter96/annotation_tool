import React from "react";
import DraggableItem from "./DraggableItem";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {

  return (
    <div>
      <Droppable droppableId={props.id}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            innerRef={provided.innerRef} 
            {...provided.droppableProps}
            >
            {props.items.map((item,index) => (
               <DraggableItem key={item.id} id={item.id} item={item} index={index} deleteItem={props.deleteItem} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
