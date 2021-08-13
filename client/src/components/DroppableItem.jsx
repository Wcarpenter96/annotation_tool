import React from "react";
import DraggableItem from "./DraggableItem";
import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1)
  }
}));

const Column = (props) => {


  return (
    <div>
      <Droppable droppableId={props.id} key={props.id}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            innerRef={provided.innerRef} 
            {...provided.droppableProps}
            >
            {props.items.map((item,index) => (
              <div>
               <DraggableItem key={item._id} id={item._id} item={item} index={index} deleteItem={props.deleteItem} />
               </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
