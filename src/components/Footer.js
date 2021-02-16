import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";

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
      <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;