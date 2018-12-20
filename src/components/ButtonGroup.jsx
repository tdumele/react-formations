import React from "react";
import { object, func } from "prop-types";
import { withStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/actions";

// Material UI
const styles = {
  buttonGroup: {
    marginTop: 20,
    textAlign: "center"
  },
  button: {
    margin: "0px 10px"
  }
};

const ButtonGroup = ({ classes, incrementMe, decrementMe }) => (
  <div className={classes.buttonGroup}>
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => incrementMe()}
    >
      Increment
    </Button>
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => decrementMe()}
    >
      Decrement
    </Button>
  </div>
);

ButtonGroup.propTypes = {
  classes: object.isRequired,
  incrementMe: func,
  decrementMe: func
};

const mapDispatchToProps = dispatch => ({
  incrementMe: () => dispatch(incrementCounter()),
  decrementMe: () => dispatch(decrementCounter())
});

export default withStyles(styles)(
  connect(
    undefined,
    mapDispatchToProps
  )(ButtonGroup)
);
