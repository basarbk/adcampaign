import React from 'react';
import PropTypes from 'prop-types';
import facebookLogo from '../icons/facebook.svg';
import instagramLogo from '../icons/instagram.svg';
import googleLogo from '../icons/google.svg';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Divider from '@material-ui/core/Divider';
import Budget from './Budget';
import DateComponent from './DateComponent';
import Status from './Status';
import Audience from './Audience';
import Creatives from './Creatives';
import Insights from './Insights';

const styles = theme => ({
  card: {
    maxWidth: 350,
    minWidth: 300,
    margin: 10
  },
  media: {
    height: 180,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

export const getImage = platform => {
  if(platform === 'facebook') {
    return facebookLogo;
  } else if ( platform === 'google') {
    return googleLogo;
  } else {
    return instagramLogo;
  }
};

export const ExpandableContent = props => {
  const { classes, label } = props;
  return <div className={classes.root}>
  <ExpansionPanel >
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={classes.heading}><strong>{label}</strong></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      {props.children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
</div>;
};

ExpandableContent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  label: PropTypes.string
};

const ExpandableContentWithStyles = withStyles(styles)(ExpandableContent);


export const PlatformCard = props => {

    const { classes, platform, content } = props;
    return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={getImage(platform)}
          title={platform}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {platform}
          </Typography>
          
          <Divider light/>
          
          <Typography gutterBottom variant="body1">
            <strong>Budget</strong>
          </Typography>
          <Budget label={'Remaining'} currentBudget={content.remaining_budget} initialBudget={content.total_budget} relativeStyle />
          <Budget label={'Total'} currentBudget={content.total_budget} />
          
          <Divider light/>
          
          <Typography gutterBottom variant="body1">
            <strong>Date</strong>
          </Typography>
          <DateComponent label={'Start'} date={content.start_date} />
          <DateComponent label={'End'} date={content.end_date} />
          
          <Divider light/>

          <Typography gutterBottom variant="body1">
            <strong>Status</strong>
          </Typography>
          <div style={{display: 'flex'}}>
            <Status textVisible status={content.status} />
          </div>

          <Divider light/>

        </CardContent>

        <ExpandableContentWithStyles label={'Audience'}>
          <Audience audience={content.target_audiance}/>
        </ExpandableContentWithStyles>

        <Divider light/>

        <ExpandableContentWithStyles label={'Creatives'}>
          <Creatives creatives={content.creatives}/>
        </ExpandableContentWithStyles>

        <Divider light/>

        <ExpandableContentWithStyles label={'Insights'}>
          <Insights insights={content.insights}/>
        </ExpandableContentWithStyles>

        
    </Card>
    );
};

PlatformCard.propTypes = {
  classes: PropTypes.object.isRequired,
  platform: PropTypes.oneOf(['facebook', 'google', 'instagram']),
  content: PropTypes.shape({
    remaining_budget: PropTypes.number,
    total_budget: PropTypes.number,
    start_date: PropTypes.number,
    end_date: PropTypes.number,
    status: PropTypes.oneOf(['Delivering', 'Ended', 'Scheduled']),
    target_audiance: PropTypes.object,
    creatives: PropTypes.object,
    insights: PropTypes.object,
  })
};

export default withStyles(styles)(PlatformCard);