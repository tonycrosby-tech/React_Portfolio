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

import project1 from "../images/first_website.JPG";
import project2 from "../images/jsquiz.jpg";
import project3 from "../images/password-generator.jpg";
import project4 from "../images/sportzilla-demo.gif";
import project5 from "../images/weather-dashboard.jpg";
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
  },
  {
    name: "Project 2 - Javascript Quiz",
    description: `This was a relatively easy project I made, It's a JavaScript Quiz with a few questions.`,
    image: project2,
  },
  {
    name: "Project 3 - Password Generator",
    description: `This project was pretty fun we got to make our own password generator!`,
    image: project3,
  },
  {
    name: "Project 4 - Sportzilla",
    description: `This was our First Actual Project, We created an App where you can search different basketball players names
      and pop up with information. (Only Basketball) ~ We didn't implement a feature to search for every sport.`,
    image: project4,
  },
  {
    name: "Project 5 - Weather Dashboard",
    description: `This is a weather dashboard used to find the weather in any City, When searched you can click on any recent city you searched for and it will display the weather in that city. This weather dashboard Displays the Current weather Forecast from The Type of Weather, Temperature, Humidity, Wind Speed and UVI Index. Also when searched a 5-Day forecast will appear including the day and date, Temperature and Humidity! On the top of the screen will Display the current time and the current day.`,
    image: project5,
  },
  {
    name: "Project 6 - My Last Non-React Website",
    description: `This was my last website created before making a React Website!`,
    image: project6,
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
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
