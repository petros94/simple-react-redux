/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));


const TopBar = props => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    history.push('/auth/login');
    // dispatch(logout());
  };


  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <AppBar
      className={classes.root}
      color="primary"
    >
      <Toolbar>
        <Typography variant="h3" color="inherit">
          ReactJS lovers Hub
        </Typography>
        <div className={classes.flexGrow} />
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
