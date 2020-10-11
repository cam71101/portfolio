import React, { useRef } from 'react';
import AppBar from './containers/AppBar';
import Main from './containers/Main';
import Projects from './containers/Projects';
import Fade from 'react-reveal/Fade';
import Contact from './containers/Contact';
import About from './containers/About';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function App() {
  let myRefContact = useRef(null);
  let myRefProjects = useRef(null);
  let myRefAbout = useRef(null);
  const scrollTo = (ref) =>
    window.scrollTo({
      behavior: 'smooth',
      top: ref.current.offsetTop,
    });

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <AppBar
        contact={() => scrollTo(myRefContact)}
        projects={() => scrollTo(myRefProjects)}
        about={() => scrollTo(myRefAbout)}
      />
      <Main projects={() => scrollTo(myRefProjects)} />

      <div ref={myRefProjects}>
        <Fade>
          <Projects />
        </Fade>
      </div>

      <div style={{ height: 1110 }} />
      <div ref={myRefAbout}>
        <Fade>
          <About />
        </Fade>
      </div>
      <div style={{ height: 20 }} />
      <div ref={myRefContact}></div>
      <Fade>
        <Contact />
      </Fade>
    </div>
  );
}

export default App;
