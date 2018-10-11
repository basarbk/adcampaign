import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export const STATUS_ICONS = {
  Delivering: {
    color: green[500],
    icon: 'check_circle'
  },
  Scheduled: {
    color: blue[500],
    icon: 'schedule'
  },
  Ended: {
    color: red[500],
    icon: 'stop'
  }
};

export const Status = (props) => {
  
  const {classes, status, iconVisible, textVisible } = props;
  
  const iconStyle = STATUS_ICONS[status];

  return (
    <div className={classes.container}>
      {iconVisible && <Icon style={{color: iconStyle.color}}>{iconStyle.icon}</Icon>}
      {textVisible && <span>{status}</span>}
    </div>
  );
};

Status.propTypes = {
  classes: PropTypes.object.isRequired,
  iconVisible: PropTypes.bool,
  textVisible: PropTypes.bool,
  status: PropTypes.oneOf(['Delivering', 'Ended', 'Scheduled']),
};

Status.defaultProps = {
  iconVisible: true,
  textVisible: false,
  status: 'Scheduled'
};

export default withStyles(styles)(Status);