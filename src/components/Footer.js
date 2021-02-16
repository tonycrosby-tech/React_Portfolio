import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link"

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#d3d3d3",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#00008b",
      "&:hover": {
        fill: "#add8e6",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
    <Link target="_blank" href="https://github.com/tonycrosby-tech">
      <BottomNavigationAction icon={<GitHub />} className={classes.root} />
    </Link >

    <Link target="_blank" href="https://www.linkedin.com/in/tony-crosby-tech/">
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
    </Link>

    <Link target="_blank" href="https://www.facebook.com/foureyez444/">
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
    </Link>

    </BottomNavigation>
  );
};
export default Footer;