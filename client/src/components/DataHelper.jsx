import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { putUnits } from "../actions";

const DataHelper = () => {

    const dispatch = useDispatch();

    const test = [{
        image_url: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg",
        title: "Test image",
        description: "This is a test image",
      }];

    const onClickHandler = () => {
      dispatch(putUnits(test))
    }

  return (
          <Grid container direction="column" alignItems="center" spacing="5">
            <Grid item>
              <Typography variant="h5">
                Looks like you don't have any data yet.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Upload your .csv file using the "UPLOAD" button 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">or</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <Link onClick={onClickHandler}>try our sample data</Link>
              </Typography>
            </Grid>
          </Grid>
  );
};

export default DataHelper;
