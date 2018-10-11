import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CampaignHeader from '../components/CampaignHeader';
import PlatformCard from '../components/PlatformCard';
import { getCampaignById } from '../api/apiCalls';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  platformContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
});

export class CampaignDetails extends Component {

  state = {
    current: undefined,
    loading: false
  }

  componentWillMount(){
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(!this.state.current || nextProps.match.params.id !== this.state.current.id){
      this.load(nextProps.match.params.id);
    }
  }

  load = id => {
    this.setState({loading: true});
    getCampaignById(id).then(response => {
      this.setState({current : response.data, loading: false});
    }).catch(err => {
      //eslint-disable-next-line
      console.log(err);
      this.setState({loading: false, current: undefined});
    });
  }

  render() {
    const { classes } = this.props;
    const { current: campaign, loading } = this.state;
    let content = <CircularProgress className={classes.progress} />;
    if(!loading) {
      content = campaign ? <CampaignHeader campaign={campaign}/> : <Typography gutterBottom variant="h5">Campaign not found</Typography>;
    }
    return (
      <Grid container className={classes.root} spacing={16} justify="center">
        <Grid className={classes.control} item xs={12}>
          {content}
        </Grid>
        {campaign && <Grid className={classes.control} item xs={12}>
          <div className={classes.platformContainer}>
          {Object.keys(campaign.platforms).map(platform => {
              const platformCurrent = campaign.platforms[platform];
              return <PlatformCard key={platform} platform={platform} content={platformCurrent}/>;
              })}

          </div>
        </Grid>}
      </Grid>
    );
  }
}

CampaignDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default withStyles(styles)(withRouter(CampaignDetails));