import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BeatLoader from "react-spinners/BeatLoader";
import Backdrop from '@material-ui/core/Backdrop';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loader = () => {
  const classes = useStyles()
  
    return (
      <Backdrop invisible className={classes.backdrop} open={true}  >
        <BeatLoader color='#3f51b5'/>
      </Backdrop>
    );
};

export default Loader;
