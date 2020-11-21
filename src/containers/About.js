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
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
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
        I'm a highly motivated problem-solving technical artist seeking a role
        as a Junior Front End Developer. Eager to learn and grow, I’m excited by
        challenges and creating.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        I'm transitioning from a compositor role in the film industry. Ben Kent,
        a Lead Research Engineer at the Foundry, has said: "From what I've seen
        a lot of comp (compositor) artists do have a developer's mindset, just
        with better dress sense", so I believe my learnt skills are
        transferrable. I'm good at finding solutions to technical issues, and I
        enjoy the process.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        className={classes.text}
        color="primary"
      >
        I’m currently learning more about React testing with Jest and Enzyme and
        I also intend to build a podcast app.
      </Typography>
    </div>
  );
};

export default About;
