import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Status from '../components/Status';
import { getCampaigns } from '../api/apiCalls';

const styles = theme => ({
  h1: {
    fontSize: '32px',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
  emptyContent: {
    paddingTop: theme.spacing.unit * 2,
  },
  snackbar: {
    margin: theme.spacing.unit,
  },
  buttonProgress: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: -60,
  },
});

const ItemWithIcon = (props) => {
  return (
    <ListItemIcon>
      <Status status={props.status} />
    </ListItemIcon>
  );
};

ItemWithIcon.propTypes = {
  status: PropTypes.oneOf(['Delivering', 'Ended', 'Scheduled']),
};

export const GroupedList = ({campaigns, group}) => {
  return (
    <List component="nav" subheader={<ListSubheader component="div">{group}</ListSubheader>}>
      {campaigns.map(camp => {
        return (
          <ListItem key={camp.name} button component={Link} to={`/campaign/${camp.id}`} >
            <ItemWithIcon status={camp.status} />
            <ListItemText primary={camp.name} secondary={camp.goal}/>
          </ListItem>
          );
      })}
    </List>);
};

GroupedList.propTypes = {
  group: PropTypes.string,
  campaigns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.oneOf(['Delivering', 'Ended', 'Scheduled']),
    goal: PropTypes.string,
  }))
};

export const EmptyContent = withStyles(styles)((props) => {
  const { classes, onClick, description, type, loading, buttonText } = props;
  let icon = <AddIcon />;
  if(type === 'refresh') {
    icon = <RefreshIcon />;
  }
  return (
    <div className={classes.emptyContent}>
      <Typography variant="h6" gutterBottom >
          {description}
        </Typography>
        <Button variant="extendedFab" color="primary" aria-label="Create" onClick={onClick} disabled={loading}>
          {icon} {buttonText}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  );
});

EmptyContent.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['add', 'refresh']).isRequired
};


export class Home extends Component {
  
  state = {
    snackVisible: false,
    loading: false,
    loadFailure: false,
    campaigns: [],
    splittedCampaigns: {
      Delivering: [],
      Ended: [],
      Scheduled: []
    }
  }

  componentWillMount(){
    this.loadCampaigns();
  }

  loadCampaigns = () => {
    this.setState({loading: true});
    getCampaigns().then(result => {
      const campaigns = result.data.content;
      const splittedCampaigns = {
        Delivering: [],
        Ended: [],
        Scheduled: []
      };
      campaigns.forEach(campaign => {
        splittedCampaigns[campaign.status].push(campaign);
      });

      this.setState({campaigns: campaigns, splittedCampaigns, loading: false, loadFailure: false});
    }).catch(err => {
      if(err.response.status !== 404) {
        this.setState({loading: false, loadFailure: true});
      } else {
        //eslint-disable-next-line
        console.log(err);
        this.setState({loading: false, loadFailure: false});
      }
    });
  }

  onClickAddCampaign = () => {
    this.setState({snackVisible: true});
  }

  handleClose = () => {
    this.setState({snackVisible: false});
  }

  render() {
    const { classes } = this.props;
    const { splittedCampaigns, campaigns, loadFailure, loading } = this.state;

    let content;
    if(loadFailure) {
      content = (
        <div style={{textAlign: 'center'}}>
          <EmptyContent onClick={this.loadCampaigns} description={`Load Failed`} buttonText={`Retry`} type={'refresh'} loading={loading}/>
        </div>);
    } else if ( campaigns.length === 0) {
      content = (
        <div style={{textAlign: 'center'}}>
          <EmptyContent onClick={this.onClickAddCampaign} description={`You don't have campaigns`} buttonText={`Add Campaign`} type={'add'} loading={loading}/>
        </div>);
    } else {
      content = Object.keys(splittedCampaigns)
        .filter(campaignStatus => {
          const campaign = splittedCampaigns[campaignStatus];
          return campaign && campaign.length > 0;
        }).map(campaignStatus => {
          const campaign = splittedCampaigns[campaignStatus];
          return <GroupedList key={campaignStatus} group={campaignStatus} campaigns={campaign} />;
        });
    }

    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <Typography component="h2" variant="h1" gutterBottom className={classes.h1}>
            Campaigns
          </Typography>
          <Divider />
          {content}
        </Paper>
        <Snackbar
          className={classes.snackbar}
          open={this.state.snackVisible}
          onClose={this.handleClose}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Create Campaign is not implemented</span>}
        />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Home);