import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: '10%',
    height: '15rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  icon: {
    fontSize: '8rem',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      fontSize: '6rem',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

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
      <Typography variant={matches ? 'h3' : 'h2'} color="primary">
        Get in touch
      </Typography>
      <div>
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
    </div>
  );
};

export default Contact;
