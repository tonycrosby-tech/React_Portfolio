import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link"

import project1 from "../images/first_website.JPG";
import project2 from "../images/jsquiz.jpg";
import project3 from "../images/password-generator.jpg";
import project4 from "../images/sportzilla-demo.gif";
import project5 from "../images/forums.JPG";
import project6 from "../images/website1.JPG";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#d3d3d3",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1 - My First Website",
    description: `This was the first website I created at the beginning of the class!`,
    image: project1,
    Link: "https://tonycrosby.net/portfolio_updated/index.html"
  },
  {
    name: "Project 2 - Javascript Quiz",
    description: `This was a relatively easy project I made, It's a JavaScript Quiz with a few questions.`,
    image: project2,
    Link: "https://tonycrosby.net/04_web_api/"
  },
  {
    name: "Project 3 - Password Generator",
    description: `This project was pretty fun we got to make our own password generator!`,
    image: project3,
    Link: "https://tonycrosby.net/03_password_generator/"
  },
  {
    name: "Project 4 - Sportzilla",
    description: `This was our First Actual Project, We created an App where you can search different basketball players names
      and pop up with information. (Only Basketball) ~ We didn't implement a feature to search for every sport.`,
    image: project4,
    Link: "https://millsy4.github.io/sportz_project/"
  },
  {
    name: "Project 5 - WhatChaMaCallIt",
    description: `This is a user Forum where a user can create threads and reply to others posts.`,
    image: project5,
    Link: "https://fullstackbc-project-02.herokuapp.com/"
  },
  {
    name: "Project 6 - My Last Non-React Website",
    description: `This was my last website created before making a React Website!`,
    image: project6,
    Link: "https://tonycrosby.net/Portfolio_Complete"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={project.Link}>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
