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
import sassLogo from '../../assets/logos/sassLogo.svg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  cardMedia: {
    width: '50vw',
    height: '25vw',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
      marginBottom: '0',
      zIndex: '2',
      order: 2,
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: 1,
    },
  },
  text: {
    width: '100%',
    margin: '-1rem',
    padding: '1rem',
    zIndex: '2',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('lg')]: {
      zIndex: '1',
    },
  },
  image: {
    height: '100%',
    width: '100%',
  },
  tags: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  line: {
    color: theme.palette.info.main,
    borderBottom: '.2rem solid red',
    width: '100%',
    marginBottom: '3rem',
    opacity: '20%',
    borderRadius: '5rem',
    marginTop: '3rem',
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fade in timeout={1000}>
      <div className={classes.container}>
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
                  size={matches ? 'small' : 'medium'}
                >
                  Source Code
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => window.open(props.livePreview)}
                  size={matches ? 'small' : 'medium'}
                >
                  {' '}
                  Live Preview
                </Button>
              </div>
            </Card>
            <div className={classes.tags}>
              <ProjectIcon logo={JavaScriptLogo} name={'Javascript'} />
              <ProjectIcon logo={HTMLLogo} name={'HTML'} />
              {props.css ? (
                <ProjectIcon logo={CSSLogo} name={'CSS'} />
              ) : (
                <ProjectIcon logo={sassLogo} name={'SASS'} />
              )}
              {props.react ? (
                <ProjectIcon logo={ReactLogo} name={'React'} />
              ) : null}
              {props.material ? (
                <ProjectIcon logo={MaterialLogo} name={'Material UI'} />
              ) : null}
            </div>
          </div>
        </Box>

        <span className={classes.line}></span>
      </div>
    </Fade>
  );
}
