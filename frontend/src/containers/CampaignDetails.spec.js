import React from 'react';
import { shallow } from 'enzyme';
import { CampaignDetails } from './CampaignDetails';

import { getCampaignById } from '../api/apiCalls';
import PlatformCard from '../components/PlatformCard';
import { CampaignHeader } from '../components/CampaignHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


jest.mock('../api/apiCalls', () => ({
  getCampaignById: jest.fn()
}));


describe('Home Page', () => {

  it('should render properly', () => {
    const result = {
      data: {
        name: 'Campaign 1',
        goal: 'Goal 1',
        status: 'Scheduled',
        platforms: {}
      }
    };
    const props = {
      history: {
        push: jest.fn()
      },
      classes: {},
      location: {
        pathname: '/'
      },
      match: {
        params: {
          id: 1
        }
      }
      
    };
    getCampaignById.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    const wrapper = shallow(<CampaignDetails {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render PlatformCards', () => {
    const result = {
      data: {
        name: 'Campaign 1',
        goal: 'Goal 1',
        status: 'Scheduled',
        platforms: {
          "facebook":{"status":"Delivering","creatives":{"header":"DevOps Made Easy, We Take care of the heavy lifting for you","description":"DOP SuperHero is where all DevOps is going to happen in the future, join the revolution today!","url":"https://example.io","image":"img1.jpg"},"insights":{"impressions":4503,"clicks":328,"nanos_score":5.7,"cost_per_click":0.88,"click_through_rate":0.09,"advanced_kpi_1":44.5,"advanced_kpi_2":0.0023},"total_budget":40.00,"remaining_budget":12.00,"start_date":1530568800000,"end_date":1532901600000,"target_audiance":{"languages":["FR","EN","DE"],"genders":["M","F"],"locations":["France","Germany","Switzerland"],"interests":["Docker","Kubernates","DevOps","AWS","Google Cloud Platform","Ubuntu"],"age_range":[20,66]}}
        }
      }
    };
    const props = {
      history: {
        push: jest.fn()
      },
      classes: {},
      location: {
        pathname: '/'
      },
      match: {
        params: {
          id: 1
        }
      }
      
    };
    getCampaignById.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    const wrapper = shallow(<CampaignDetails {...props} />);
    wrapper.setState({current: result.data});
    wrapper.update();
    expect(wrapper.find(PlatformCard).length).toBe(1);
  });

  it('should display circular progress while api call in progress', () => {
    const result = {};
    const props = {
      history: {
        push: jest.fn()
      },
      classes: {},
      location: {
        pathname: '/'
      },
      match: {
        params: {
          id: 1
        }
      }
      
    };
    //eslint-disable-next-line
    console.log = jest.fn();
    getCampaignById.mockImplementation(() => new Promise((resolve, reject) => reject(result)));
    const wrapper = shallow(<CampaignDetails {...props} />);
    wrapper.setState({loading: true});
    wrapper.update();
    expect(wrapper.find(CircularProgress).length).toBe(1);
    expect(wrapper.find(CampaignHeader).length).toBe(0);
  });

  it('should display relevant error message when api call fails', () => {
    const result = {};
    const props = {
      history: {
        push: jest.fn()
      },
      classes: {},
      location: {
        pathname: '/'
      },
      match: {
        params: {
          id: 1
        }
      }
      
    };
    
    //eslint-disable-next-line
    console.log = jest.fn();
    getCampaignById.mockImplementation(() => new Promise((resolve, reject) => reject(result)));
    const wrapper = shallow(<CampaignDetails {...props} />);
    wrapper.setState({loading: false, current: undefined});
    wrapper.update();
    expect(wrapper.find(CircularProgress).length).toBe(0);
    expect(wrapper.find(Typography).html()).toContain('Campaign not found');
  });
});