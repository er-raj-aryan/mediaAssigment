import React from "react";
import { Grid } from "@mui/material";
import useStyle from './style'
import FILTER_TABLE from  "./Table/Table"

 function Filter() {
     const classes = useStyle()
  return (
    <div>
      <Grid container className={classes.root}>
        <FILTER_TABLE />
      </Grid>
    </div>
  );
}

export default Filter