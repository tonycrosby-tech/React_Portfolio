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
