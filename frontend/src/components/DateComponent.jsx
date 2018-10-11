import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import * as util from './Util';


export const DateComponent = (props) => {

  const { label, date } = props;
  
  const formattedDate = util.dateToString(date);

  return (
    <div style={{display: 'flex'}}>
      {label && <Typography variant="body2">{`${label}:`}</Typography>}
      <Typography variant="body2" >{` ${formattedDate} UTC`}</Typography>
    </div>
  );
};

DateComponent.propTypes = {
  label: PropTypes.string,
  date: PropTypes.number,
};

export default DateComponent;