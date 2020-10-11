import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem',
    width: '50%',
    height: '8rem',
  },
  text: {
    textAlign: 'center',
    flexGrow: 1,
    justifySelf: 'flex-end',
  },
}));

export default function ProjectIcon(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={props.logo} alt={props.name} />
      <Typography className={classes.text}>{props.name}</Typography>
    </div>
  );
}
