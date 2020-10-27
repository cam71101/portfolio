import React, { useRef } from 'react';
import AppBar from './containers/AppBar';
import Main from './containers/Main';
import Projects from './containers/Projects';
import Fade from 'react-reveal/Fade';
import Contact from './containers/Contact';
import About from './containers/About';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.light,
    width: '100vw',
  },
}));

function App() {
  const theme = useTheme();
  let myRefContact = useRef(null);
  let myRefProjects = useRef(null);
  let myRefAbout = useRef(null);
  const scrollTo = (ref) =>
    window.scrollTo({
      behavior: 'smooth',
      top: ref.current.offsetTop,
    });
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <AppBar
        contact={() => scrollTo(myRefContact)}
        projects={() => scrollTo(myRefProjects)}
        about={() => scrollTo(myRefAbout)}
      />
      <Main projects={() => scrollTo(myRefProjects)} />
      <div style={{ height: 100 }} ref={myRefProjects}></div>
      <div>
        <Fade>
          <Projects />
        </Fade>
      </div>

      <div style={{ height: 1400 }} />
      <div style={{ height: 100 }} ref={matches ? myRefAbout : null} />
      <div ref={matches ? null : myRefAbout}>
        <Fade>
          <About />
        </Fade>
      </div>
      <div ref={myRefContact}></div>
      <Fade>
        <Contact />
      </Fade>
    </div>
  );
}

export default App;
