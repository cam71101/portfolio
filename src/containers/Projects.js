import React from 'react';

import ProjectCard from '../components/ProjectCard/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import battleShipsDesktop from '../assets/BattleShips_ScreeGrab_Desktop_Cropped.png';
import weatherApp from '../assets/Weather_App.png';
import myMovieList from '../assets/My_Movie_List.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    height: '100rem',
    width: '80%',
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

  const projects = {
    myMovieList: {
      image: myMovieList,
      title: 'MY MOVIE LIST',
      subHeading: 'Create a list of movies to watch and rate',
      text:
        'This project was buit to help people visualise the impact of corona virus. I wanted to solve the problem of large data sets not being easy to understand. The App fetches real time data from John Hopskins University through an API and displays human icons to represent how many people are infected, cured and have died.',
      react: true,
      material: true,
      sourceCode: 'https://github.com/cam71101/My-Movie-List',
      livePreview: ' https://cam71101.github.io/My-Movie-List/',
    },
    weatherApp: {
      image: weatherApp,
      title: 'WEATHER CITY APP',
      subHeading: 'Search for weather predictions for a city',
      text:
        'This project was built to help visualise how different sorting algorithms work. The sorting algorithms chosen were quick sort, merge sort and insertion sort.',
      react: true,
      sourceCode: 'https://github.com/cam71101/weather-app',
      livePreview: 'https://cam71101.github.io/weather-app/',
    },
    battleShips: {
      title: 'BATTLESHIPS',
      subHeading: 'Recreation of the famous board game',
      image: battleShipsDesktop,
      text:
        'In this project I practised Test Driven Development using Jest and Object Oriented Programming. The goal was to create the main Factory Functions and test their proper functionality. It was built with HTML, CSS and Javascript.',
      sourceCode: 'https://github.com/cam71101/BattleShips',
      livePreview: 'https://cam71101.github.io/BattleShips/',
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
      ></ProjectCard>
    );
  });

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom className={classes.text}>
        Projects
      </Typography>
      {websites}
    </div>
  );
};

export default Projects;
