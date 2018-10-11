import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

export const Budget = (props) => {

  const { currentBudget, initialBudget, label, relativeStyle } = props;
  let color;
  if (relativeStyle && currentBudget) {
    color = green[500];
    const ratio = currentBudget / initialBudget;
    if( ratio < 0.3) {
      color = red[900];
    } else if ( ratio < 0.6 ) {
      color = orange[500];
    }
  }

  return (
    <div style={{display: 'flex'}}>
      {label && <Typography variant="body1" gutterBottom>{`${label}:`}</Typography>}
      <Typography variant="body1" gutterBottom style={{color}}> <strong>{currentBudget} $</strong></Typography>
    </div>
  );
};

Budget.propTypes = {
  label: PropTypes.string,
  relativeStyle: PropTypes.bool,
  currentBudget: PropTypes.number,
  initialBudget: PropTypes.number,
};

export default Budget;