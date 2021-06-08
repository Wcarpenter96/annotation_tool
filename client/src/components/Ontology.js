import React, { useState } from "react";
import DroppableItem from "./DroppableItem";
import SimpleDialog from "./SimpleDialog";
import { DragDropContext } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  ontologyContainer: {
    padding: 40,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Ontology = () => {
  const clss = [
    { cls: "test1", color: "red", id: "11" },
    { cls: "test2", color: "blue", id: "22" },
    { cls: "test3", color: "green", id: "33" },
  ];

  const classes = useStyles();

  const initialDroppables = [{ items: clss, id: "1" }];

  const [droppables, setDroppables] = useState(initialDroppables);

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const deleteItem = (draggableId) => {
    const newItemIds = [];
    droppables[0].items.map((item) => {
      if (item.id != draggableId) {
        newItemIds.push(item.id);
      }
    });
    const newItems = [];
    newItemIds.map((newItemId) => {
      droppables[0].items.map((item) => {
        if (newItemId === item.id) {
          newItems.push(item);
        }
      });
    });
    setDroppables([{ items: newItems, id: droppables[0].id }]);
  };

  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const addItem = (className, color) => {
    const newItems = [];
    droppables[0].items.map((item) => {
      newItems.push(item);
    });
    newItems.push({
      cls: className,
      color: color,
      id: uuidv4(),
    });
    setDroppables([{ items: newItems, id: droppables[0].id }]);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newItemIds = [];
    droppables[0].items.map((item) => {
      newItemIds.push(item.id);
    });
    newItemIds.splice(source.index, 1);
    newItemIds.splice(destination.index, 0, draggableId);
    const newItems = [];
    newItemIds.map((newItemId) => {
      droppables[0].items.map((item) => {
        if (newItemId === item.id) {
          newItems.push(item);
        }
      });
    });
    setDroppables([{ items: newItems, id: droppables[0].id }]);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.ontologyContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          {droppables.map((droppable) => {
            return (
              <DroppableItem
                key={droppable.id}
                id={droppable.id}
                items={droppable.items}
                deleteItem={deleteItem}
              />
            );
          })}
        </DragDropContext>
        <Button onClick={handleClickOpen}>
          <AddIcon />
        </Button>
        <SimpleDialog open={open} onClose={handleClose} addItem={addItem} />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        className={classes.button}
        onClick={() => console.log("hi")}
      >
        <Typography>Save</Typography>
      </Button>
    </div>
  );
};

export default Ontology;
