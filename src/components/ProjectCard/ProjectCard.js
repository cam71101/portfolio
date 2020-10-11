import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Fade } from '@material-ui/core';
import JavaScriptLogo from '../../assets/logos/javaScriptLogo.svg';
import HTMLLogo from '../../assets/logos/htmlLogo.svg';
import CSSLogo from '../../assets/logos/cssLogo.svg';
import ProjectIcon from './ProjectIcon';
import ReactLogo from '../../assets/logos/reactLogo.svg';
import MaterialLogo from '../../assets/logos/materialUILogo.svg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  cardMedia: {
    width: '60%',
    display: 'flex',
    marginBottom: '5rem',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
  text: {
    height: '50%',
    width: '100%',
    margin: '-1rem',
    padding: '1rem',
    zIndex: '2',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
  },
  image: {
    height: '100%',
    width: '100%',
  },

  tags: {
    marginTop: '10%',
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    flexWarp: 'wrap',
  },
  title: {
    color: theme.palette.info.main,
    borderBottom: '.1rem solid',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    margin: '2rem',
  },
  subHeading: {},
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Fade in timeout={1000}>
      <Box className={classes.root}>
        <Card className={classes.cardMedia}>
          <img src={props.image} className={classes.image} alt="desktop" />
        </Card>
        <div className={classes.description}>
          <Card className={classes.text}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {props.title}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.subHeading}
            >
              {props.subHeading}
            </Typography>
            {props.text}
            <div className={classes.buttons}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={() => window.open(props.sourceCode)}
              >
                Source Code
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={() => window.open(props.livePreview)}
              >
                {' '}
                Live Preview
              </Button>
            </div>
          </Card>
          <div className={classes.tags}>
            <ProjectIcon logo={JavaScriptLogo} name={'Javascript'} />
            <ProjectIcon logo={HTMLLogo} name={'HTML'} />
            <ProjectIcon logo={CSSLogo} name={'CSS'} />
            {props.react ? (
              <ProjectIcon logo={ReactLogo} name={'React'} />
            ) : null}
            {props.material ? (
              <ProjectIcon logo={MaterialLogo} name={'Material UI'} />
            ) : null}
          </div>
        </div>
      </Box>
    </Fade>
  );
}
