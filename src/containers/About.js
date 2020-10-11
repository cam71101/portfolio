import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    marginLeft: '10%',
  },
  title: {
    borderBottom: '.5rem solid',
    marginBottom: '5%',
    width: '100%',
    color: theme.palette.primary.dark,
  },
  text: {
    marginBottom: '3%',
    fontSize: '1rem',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        gutterBottom
        className={classes.title}
        color="primary"
      >
        About me.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        I'm a Front-end Developer and Artist.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        I like creating elegant front ends with modern and clean code. I'm
        currently learning Typescript and the functional programming paradigm
        within Javascript.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        Interested in learning more of the full stack. Currently making some
        small projects with Node.js and Express.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        When I'm not learning one of the above or wrestling with webpack I'm
        usually in the studio painting or on Codewars..
      </Typography>
    </div>
  );
};

export default About;
