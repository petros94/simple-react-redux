import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  }
}));

function Topbar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={classes.root}
      color="primary"
    >
      <Toolbar>
        <Typography variant="h3" color="inherit">
          ReactJS lovers Hub
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
