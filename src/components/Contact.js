import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#d3d3d3",
    height: "100vh",
  },
  heading: {
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "black",
  },
  button: {
    marginTop: "1rem",
    color: "black",
    borderColor: "#00008b",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& label": {
      color: "#00008b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#00008b",
      },
      "&:hover fieldset": {
        borderColor: "#00008b",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#00008b",
      },
    },
  },
})(TextField);

const Contact = () => {
    const classes = useStyles();
    return (
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    );
  };
  
  export default Contact;
  