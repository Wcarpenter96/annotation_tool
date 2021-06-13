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
    alignItems:'center',
    justifyContent:'space-between',
    border: '1px solid #e6e6e6',
    padding:theme.spacing(1)
  },
  icon:{
    flexGrow:1
  },
  name:{
    flexGrow:10
  },
  button:{
    flexGrow:1
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
          <Brightness1Icon className={classes.icon} style={{ color: props.item.color }} /> 
          <Typography className={classes.name} >{props.item.cls}</Typography>
          <Button className={classes.button} onClick={() => props.deleteItem(draggableId)}>
            <CloseIcon />
          </Button>
        </Card>
      )}
    </Draggable>
  );
};

export default DraggableItem;
