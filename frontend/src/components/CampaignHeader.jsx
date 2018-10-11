import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Status from './Status';

const styles = {
  main: {
    display: 'flex'
  },
  header: {
    flexGrow: 1
  }
};

export const CampaignHeader = (props) => {
  const { classes } = props;
  const { name, goal, status, total_budget} = props.campaign;
  return (
    <Paper style={{padding: '10px'}}>
      <div className={classes.main}>
        <Typography variant="h4" gutterBottom className={classes.header}>
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Budget: {total_budget}
        </Typography>
      </div>
      <Divider />
      <div className={classes.main}>
        <Typography variant="subtitle1" gutterBottom className={classes.header}>
          <strong>Goal:</strong> {goal}
        </Typography>
        <Typography variant="subtitle1" gutterBottom >
          <Status status={status} textVisible />
        </Typography>
      </div>
    </Paper>
  );
};

CampaignHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.shape({
    name: PropTypes.string,
    goal: PropTypes.string,
    status: PropTypes.oneOf(['Delivering', 'Ended', 'Scheduled']),
  })
};

CampaignHeader.defaultProps = {
  campaign: {
    name: '',
    goal: '',
    status: 'Scheduled'
  }
};

export default withStyles(styles)(CampaignHeader);