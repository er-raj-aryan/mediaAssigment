import React from "react";
import useStyle from "./style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Filter from '../../Components/Filter/Filter'
function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item className={classes.backgroundImg}>
          <img
            src="https://www.shotelsresorts.com/wp-content/uploads/2020/07/HRH.jpg"
            alt="img"
            className={classes.img}
          />
        </Grid>
        <Grid item className={classes.item}>
          <Grid className={classes.title}>
            <Typography variant="h1" color="initial" className={classes.text1}>
              MALE
            </Typography>
            <Typography variant="h1" color="initial" className={classes.text2}>
              MALDIVES
            </Typography>
          </Grid>
            <Grid>
                <Filter />
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
