import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class TopBar extends Component {

  onClickBack = () => {
    this.props.history.push('/');
  }

  render() {

    const { classes } = this.props;
    const backNeeded = this.props.location.pathname !== '/';

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {backNeeded && <IconButton className={classes.menuButton} color="inherit" aria-label="Back" onClick={this.onClickBack}>
              <ArrowBack/>
            </IconButton>}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Campaigns
            </Typography>
            <div>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  classes: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withStyles(styles)(withRouter(TopBar));