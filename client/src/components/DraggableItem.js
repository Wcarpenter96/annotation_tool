import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
  }
}))

const DraggableItem = (props) => {

  const classes = useStyles();

  const draggableId = props.id;
  return (
    <Draggable  draggableId={draggableId} index={props.index}>
      {(provided) => (
        <Card
        className={classes.card}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          innerRef={provided.innerRef}
        >
          <Brightness1Icon style={{ color: props.item.color }} /> 
          <Typography>{props.item.cls}</Typography>
          <Button onClick={() => props.deleteItem(draggableId)}>
            <CloseIcon />
          </Button>
        </Card>
      )}
    </Draggable>
  );
};

export default DraggableItem;
