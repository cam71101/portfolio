import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CV from '../assets/David_Fisher_Dev_CV.docx.pdf';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: 5,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  button: {
    color: theme.palette.secondary.light,
  },
  logo: {
    borderBottom: '.1rem solid #c62828',
    alignContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {},
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar} variant={'regular'}>
        {!matches ? (
          <Typography className={classes.logo} color="secondary">
            DAVID FISHER
          </Typography>
        ) : (
          <Typography className={classes.logo} color="secondary">
            DF
          </Typography>
        )}

        <div className={classes.buttons}>
          <Button
            className={classes.button}
            onClick={() => window.open(CV, '_blank')}
            size={matches ? 'small' : undefined}
          >
            CV
          </Button>
          <Button
            className={classes.button}
            onClick={props.contact}
            size={matches ? 'small' : undefined}
          >
            Contact
          </Button>
          <Button
            className={classes.button}
            onClick={props.projects}
            size={matches ? 'small' : undefined}
          >
            Projects
          </Button>
          <Button
            className={classes.button}
            onClick={props.about}
            size={matches ? 'small' : undefined}
          >
            About
          </Button>
        </div>
      </Toolbar>
    </div>
  );
}
