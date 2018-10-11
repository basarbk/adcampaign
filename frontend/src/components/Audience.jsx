import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const COUNTRIES = {
  FR: 'FR',
  DE: 'DE',
  EN: 'GB'
};

const GENDERS = {
  M: 'Male',
  F: 'Female'
};


export const Audience = (props) => {
  const { languages, genders, age_range, locations, KeyWords } = props.audience;
  const { classes } = props;
  return (
    <div style={{width: '100%'}}>
      {languages && languages.length > 0 && (
        <React.Fragment>
          <Typography variant="body2" >Languages</Typography>
          <Divider />
          <div className={classes.root}>
            {languages.map(lang => {
            return <Chip
              key={lang}
              avatar={<Avatar alt={lang} src={`https://www.countryflags.io/${COUNTRIES[lang]}/flat/16.png`} />}
              label={lang}
              className={classes.chip}
            />;})}
          </div>
        </React.Fragment>)}
      {genders && genders.length > 0 && (
        <React.Fragment>
          <Typography variant="body2" >Genders</Typography>
          <Divider />
          <div className={classes.root}>
            {genders.map(gender => {
            return <Chip
              key={gender}
              label={GENDERS[gender]}
              className={classes.chip}
            />;})}
          </div>
        </React.Fragment>)}

      {age_range && age_range.length > 0 && (
        <React.Fragment>
          <Typography variant="body2" >Age Range</Typography>
          <Divider />
          <div className={classes.root}>
            {age_range.map(age => {
            return <Chip
              key={age}
              label={age}
              className={classes.chip}
            />;})}
          </div>
        </React.Fragment>)}

      {locations && locations.length > 0 && (
        <React.Fragment>
          <Typography variant="body2" >Locations</Typography>
          <Divider />
          <div className={classes.root}>
            {locations.map(location => {
            return <Chip
              key={location}
              label={location}
              className={classes.chip}
            />;})}
          </div>
        </React.Fragment>)}


      

      {KeyWords && KeyWords.length > 0 && (
        <React.Fragment>
          <Typography variant="body2" >Keywords</Typography>
          <Divider />
          <div className={classes.root}>
            {KeyWords.map(keyword => {
            return <Chip
              key={keyword}
              label={keyword}
              className={classes.chip}
            />;})}
          </div>
        </React.Fragment>)}

    </div>
  );
};

Audience.propTypes = {
  classes: PropTypes.object.isRequired,
  audience: PropTypes.shape({
    languages: PropTypes.array,
    gender: PropTypes.array,
    age_range: PropTypes.array,
    locations: PropTypes.array,
    KeyWords: PropTypes.array,
  })
};

export default withStyles(styles)(Audience);