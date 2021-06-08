import React, { useState, useEffect } from 'react';
import DroppableItem from "./DroppableItem";
import SimpleDialog from "./SimpleDialog";
import { DragDropContext } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateClasses } from '../actions'


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

  const dispatch = useDispatch()


  const classlist = useSelector((state) => state.task.classes);

  const classes = useStyles();

  const [items, setItems] = useState(classlist);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(updateClasses(items||classlist))
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const deleteItem = (draggableId) => {
    const newItemIds = [];
    items.map((item) => {
      if (item._id != draggableId) {
        newItemIds.push(item._id);
      }
    });
    const newItems = [];
    newItemIds.map((newItemId) => {
      items.map((item) => {
        if (newItemId === item._id) {
          newItems.push(item);
        }
      });
    });
    setItems(newItems);
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
    items.map((item) => {
      newItems.push(item);
    });
    newItems.push({
      cls: className,
      color: color,
      _id: uuidv4(),
    });
    setItems(newItems);
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
    items.map((item) => {
      newItemIds.push(item._id);
    });
    newItemIds.splice(source.index, 1);
    newItemIds.splice(destination.index, 0, draggableId);
    const newItems = [];
    newItemIds.map((newItemId) => {
      items.map((item) => {
        if (newItemId === item._id) {
          newItems.push(item);
        }
      });
    });
    setItems(newItems);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.ontologyContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
              <DroppableItem
                id='1'
                items={items}
                deleteItem={deleteItem}/>
        </DragDropContext>
        <Button onClick={handleClickOpen}>
          <AddIcon />
        </Button>
        <SimpleDialog open={open} onClose={handleClose} addItem={addItem} />
      </Paper>
    </div>
  );
};

export default Ontology;
