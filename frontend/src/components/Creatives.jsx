import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

export const Creatives = props => {

  
    const { classes, creatives } = props;

    const { description, header, header_1, header_2, image, url} = creatives;


    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="AD" className={classes.avatar}>
              AD
            </Avatar>
          }
          title={header || header_1}
          subheader={!header && header_2}
        />
        <CardMedia
          component="img"
          alt={description}
          className={classes.media}
          height="140"
          image={`/images/${image}`}
        />
        <CardContent>
          <Typography component="p">
            {description}
          </Typography>
          <a href={url}>{url}</a>
        </CardContent>
    </Card>
    );
};

Creatives.propTypes = {
  classes: PropTypes.object.isRequired,
  creatives: PropTypes.shape({
    description: PropTypes.string,
    header: PropTypes.string,
    header_1: PropTypes.string,
    header_2: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string
  })
};

export default withStyles(styles)(Creatives);