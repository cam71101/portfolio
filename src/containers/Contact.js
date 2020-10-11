import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30rem',
  },
  icon: {
    fontSize: '8rem',
    cursor: 'pointer',
  },
}));

const Contact = () => {
  const classes = useStyles();

  const Mailto = () => {
    return (
      <a
        href="mailto:david.fisher137@gmail.com"
        rel="nofollow noopener noreferrer"
      >
        Mail
      </a>
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary">
        Get in touch
      </Typography>
      <LinkedInIcon
        className={classes.icon}
        fontSize="large"
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/david-fisher-19758078/',
            '_blank'
          )
        }
      ></LinkedInIcon>
      <EmailIcon
        className={classes.icon}
        onClick={() =>
          (window.location.href = 'mailto:david.fisher137@gmail.com')
        }
      ></EmailIcon>
    </div>
  );
};

export default Contact;
