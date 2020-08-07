import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 350,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        defaultValue={50000}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={5000}
        marks
        min={0}
        max={95000}
      />
    </div>
  )
}
