import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginTop: '10rem',
    scrollBehavior: 'smooth',
    height: '70rem',
    width: '80%',
  },
  text: {
    color: theme.palette.primary.dark,
  },
  margin: {
    marginTop: '3%',
  },
  projects: {
    borderBottom: '.1rem solid',
    fontWeight: 400,
    cursor: 'pointer',
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box component="div" className={classes.root}>
      <Grow in timeout={500}>
        <Typography variant={matches ? 'h4' : 'h2'} color="primary">
          Hello.
        </Typography>
      </Grow>
      <Grow in timeout={1000}>
        <Typography variant={matches ? 'h2' : 'h1'} className={classes.text}>
          I'm David Fisher.
        </Typography>
      </Grow>
      <Grow in timeout={1000}>
        <Typography
          variant={matches ? 'h6' : 'h5'}
          gutterBottom
          color="primary"
        >
          A front end software engineer living in London.
        </Typography>
      </Grow>
      <Grow in timeout={1000}>
        <Typography
          variant="h5"
          gutterBottom
          color="primary"
          className={classes.margin}
        >
          Here are some of my{' '}
          <span className={classes.projects} onClick={props.projects}>
            PROJECTS
          </span>
        </Typography>
      </Grow>
    </Box>
  );
};

export default Main;
