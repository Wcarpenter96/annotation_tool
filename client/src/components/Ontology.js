import React, { useState } from "react";
import DroppableItem from "./DroppableItem";
import { DragDropContext } from "react-beautiful-dnd";

const Ontology = () => {
  
    const classes = [
      { 'cls': 'test1','color':'red','id':'11'},
      { 'cls': 'test2','color':'blue','id':'22'},
      { 'cls': 'test3','color':'green','id':'33'}
  ]

  const initialDroppables = [{'items':classes,'id':'1'}]

  const [droppables, setDroppables] = useState(initialDroppables);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (!destination){
        return
    }
    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ){
        return
    }
    const newItemIds = []
    droppables[0].items.map(item => {
        newItemIds.push(item.id)
    })
    newItemIds.splice(source.index, 1)
    newItemIds.splice(destination.index, 0, draggableId)
    const newItems = []
    newItemIds.map(newItemId => {
        droppables[0].items.map(item => {
            if (newItemId === item.id){
                newItems.push(item)
            }
        })
    })
    setDroppables([{'items':newItems,'id':droppables[0].id}])
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {droppables.map((droppable) => {
          return <DroppableItem key={droppable.id} id={droppable.id} items={droppable.items} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default Ontology;
