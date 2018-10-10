import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './containers/Home';
import CampaignDetails from './containers/CampaignDetails';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
  }
});


class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className={classes.root}>
            <TopBar />
            <div className={classes.container}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/campaign/:id" component={CampaignDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
