import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import { CampaignHeader } from './CampaignHeader';
import Status from './Status';


describe('CampaignHeader Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      campaign: {
        name: undefined,
        goal: undefined,
        status: 'Delivering',
        total_budget: undefined
      }
    };
    const wrapper = shallow(<CampaignHeader {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render Status component', () => {
    const props = {
      classes: {},
      campaign: {
        name: undefined,
        goal: undefined,
        status: 'Delivering',
        total_budget: undefined
      }
    };
    const wrapper = shallow(<CampaignHeader {...props} />);
    expect(wrapper.find(Status).length).toBe(1);
  });

  it('should render Typography components', () => {
    const props = {
      classes: {},
      campaign: {
        name: 'Test name',
        goal: 'Test goal',
        status: 'Delivering',
        total_budget: 500
      }
    };
    const wrapper = shallow(<CampaignHeader {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain(props.campaign.name);
    expect(wrapper.find(Typography).at(1).html()).toContain(props.campaign.total_budget);
    expect(wrapper.find(Typography).at(2).html()).toContain(props.campaign.goal);
  });
});