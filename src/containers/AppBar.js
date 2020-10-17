import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
  button: {
    color: theme.palette.primary.dark,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar} variant={'regular'}>
        <Button
          className={classes.button}
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/david-fisher-19758078/',
              '_blank'
            )
          }
        >
          CV
        </Button>
        <Button className={classes.button} onClick={props.contact}>
          Contact
        </Button>
        <Button className={classes.button} onClick={props.projects}>
          Projects
        </Button>
        <Button className={classes.button} onClick={props.about}>
          About
        </Button>
      </Toolbar>
    </div>
  );
}
