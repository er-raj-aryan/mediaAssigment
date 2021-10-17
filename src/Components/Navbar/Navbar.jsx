import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyle from "./style";
import { Link } from "react-router-dom";
import { logo, navbar } from "../../API/apiDATA";

function Navbar() {
  const classes = useStyle();
  

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item className={classes.logo}>
          <Typography variant="h6" color="initial" className={classes.text}>{logo}</Typography>
        </Grid>
        <Grid item spacing={2} className={classes.link}>
          {navbar.map((e) => {
            return (
              <Grid key={e.id} className={classes.linkItem}>
                <Link to={e.page} className={classes.a}>
                <Typography variant="body1" color="initial" className={classes.text}>{e.name}</Typography>           
                </Link>
              </Grid>
            );
          })}
          <a href="www.google.com" className={classes.whatsapp}>
          <img src="https://img.icons8.com/color/20/000000/whatsapp--v6.png" alt="" className={classes.whatsappImg}/> 
          <Typography variant="body1" color="initial" className={classes.text}>Whats App</Typography></a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
