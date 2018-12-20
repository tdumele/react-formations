import React from "react";
import { object, number } from "prop-types";
import { withStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";

// Material UI
const styles = {
  navBar: {
    flexGrow: 1
  }
};

const NavBar = props => (
  <div className={props.classes.navBar}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Counter : {props.counter}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  classes: object.isRequired,
  counter: number
};

const mapStateToProps = state => ({ counter: state.counterReducer.counter });

export default withStyles(styles)(connect(mapStateToProps)(NavBar));
