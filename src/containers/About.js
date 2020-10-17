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
    marginBottom: '2.2rem',
    width: '100%',
    color: theme.palette.primary.dark,
  },
  text: {
    fontSize: '1rem',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title} color="primary">
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
        I have a passion for problem-solving and draw immense satisfaction from
        creating. This has led me to become a self-taught developer. I enjoy
        learning and I like that programming requires a growth mindset to keep
        up with the latest tech and trends. My current career is technically
        demanding and I believe these skills are easily transferable to
        programming.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        I’m currently learning the functional programming paradigm within
        Javascript. My next project will be a Podcast App.
      </Typography>
    </div>
  );
};

export default About;
