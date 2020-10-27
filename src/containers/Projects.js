import React from 'react';

import ProjectCard from '../components/ProjectCard/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import battleShipsDesktop from '../assets/BattleShips_ScreeGrab_Desktop_Cropped.png';
import weatherApp from '../assets/weather-app-screenshot.png';
import myMovieList from '../assets/My_Movie_List.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    height: '100rem',
    width: '80vw',
  },
  text: {
    borderBottom: '.5rem solid',
    marginBottom: '5%',
    width: '100%',
    color: theme.palette.primary.dark,
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const projects = {
    myMovieList: {
      image: myMovieList,
      title: 'MY MOVIE LIST',
      subHeading: 'Create a list of movies to watch and rate',
      text:
        'Created using React.js and Firebase, My Movie List is an application that allows users to create an account, add movies to a personal list, toggle if you’ve seen the movie or not and rate the movie on a rating scale of 10. The application pulls images and data from ‘The Movie Database API',
      react: true,
      material: true,
      sourceCode: 'https://github.com/cam71101/My-Movie-List',
      livePreview: ' https://cam71101.github.io/My-Movie-List/',
      css: true,
    },
    weatherApp: {
      image: weatherApp,
      title: 'WEATHER CITY APP',
      subHeading: 'Search for weather predictions for a city',
      text:
        'WeatherCheck allows users to enter a city name and receive current weather data using the OpenWeatherMap API. All cities with the specified name are displayed, and a temperature unit toggle is available to switch between Celsius and Fahrenheit.',
      react: true,
      sourceCode: 'https://github.com/cam71101/weather-app',
      livePreview: 'https://cam71101.github.io/weather-app/',
      css: true,
    },
    battleShips: {
      title: 'BATTLESHIPS',
      subHeading: 'Recreation of the famous board game',
      image: battleShipsDesktop,
      text:
        'In this project I practised Test Driven Development using Jest and Object Oriented Programming. The goal was to create the main Factory Functions and test their proper functionality. It was built with HTML, CSS and Javascript.',
      sourceCode: 'https://github.com/cam71101/BattleShips',
      livePreview: 'https://cam71101.github.io/BattleShips/',
      css: false,
    },
  };

  const websites = Object.values(projects).map((project) => {
    return (
      <ProjectCard
        image={project.image}
        text={project.text}
        react={project.react}
        material={project.material}
        title={project.title}
        subHeading={project.subHeading}
        sourceCode={project.sourceCode}
        livePreview={project.livePreview}
        css={project.css}
      ></ProjectCard>
    );
  });

  return (
    <div className={classes.root}>
      <Typography
        variant={matches ? 'h3' : 'h2'}
        gutterBottom
        className={classes.text}
      >
        Projects
      </Typography>
      {websites}
    </div>
  );
};

export default Projects;
