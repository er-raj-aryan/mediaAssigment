import * as React from "react";
import useStyle from "./style";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";

export default function FILTER_TABLE() {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <Grid container>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
              style={{paddingLeft:"5px"}}
            >
              Destination
            </Typography>
            <select className={classes.locationSelect}>
              <option disabled selected>
                Choose Location
              </option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            >
              Travel From&nbsp;:
            </Typography>
            <input className={classes.travelFrom} type="date"></input>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            >
              To&nbsp;:
            </Typography>
            <input className={classes.to} type="date"></input>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            >
              Rooms&nbsp;:
            </Typography>
            <select className={classes.roomSelector}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            >
              Adults&nbsp;:
            </Typography>
            <select className={classes.adultSelector}>
              <option>0</option>
              <option>2</option>
              <option>5</option>
            </select>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            >
              Chlid&nbsp;:
            </Typography>
            <select className={classes.child}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </li>
          <li className={classes.li}>
            <Typography
              variant="body2"
              color="initial"
              className={classes.filterLabel}
            ></Typography>
            <button className={classes.btn}>SEARCH</button>
          </li>
        </ul>
      </Grid>
    </Card>
  );
}
