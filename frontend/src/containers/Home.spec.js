import React from 'react';
import { shallow } from 'enzyme';
import { Home, EmptyContent, GroupedList } from './Home';

import { getCampaigns } from '../api/apiCalls';

jest.mock('../api/apiCalls', () => ({
  getCampaigns: jest.fn()
}));


describe('Home Page', () => {

  it('should render properly', () => {
    const result = {
      data:    {
        content: []
      }
    };
    const props = {
      classes: {}
    };
    getCampaigns.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should display empty content when no content is received from backend', () => {
    const result = {
      data:    {
        content: []
      }
    };
    const props = {
      classes: {}
    };

    getCampaigns.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    const wrapper = shallow(<Home {...props} />);
    
    expect(wrapper.find(EmptyContent).at(0).html()).toContain('Add Campaign');
  });

  it('should display snackbar when clicked add campaign button', () => {
    const result = {
      data:    {
        content: []
      }
    };
    const props = {
      classes: {}
    };
    getCampaigns.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    
    const wrapper = shallow(<Home {...props} />);
    wrapper.instance().onClickAddCampaign();
    expect(wrapper.state('snackVisible')).toBe(true);
    
  });

  it('should display error content when api call fails other than 404', () => {
    const response = {
      data:    {},
      status: 500
    };
    const props = {
      classes: {}
    };
    getCampaigns.mockImplementation(() => new Promise((resolve, reject) => reject({response})));
    
    const wrapper = shallow(<Home {...props} />);
    wrapper.setState({loadFailure: true});
    wrapper.update();
    expect(wrapper.find(EmptyContent).at(0).html()).toContain('Retry');
  });

  it('should render items loaded from backend', () => {
    const result = {
      data:    {
        content: []
      }
    };

    const state = {
      campaigns: [
        {
          id: 1,
          status: 'Delivering',
          name: 'Campaign 1',
          goal: 'Goal 1'
        },
        {
          id: 2,
          status: 'Ended',
          name: 'Campaign 2',
          goal: 'Goal 2'
        },
        {
          id: 3,
          status: 'Scheduled',
          name: 'Campaign 3',
          goal: 'Goal 3'
        }
      ],
      splittedCampaigns: {
        Delivering: [
          {
            id: 1,
            status: 'Delivering',
            name: 'Campaign 1',
            goal: 'Goal 1'
          }
        ],
        Ended: [
          {
            id: 1,
            status: 'Delivering',
            name: 'Campaign 1',
            goal: 'Goal 1'
          }
        ],
        Scheduled: [
          {
            id: 3,
            status: 'Scheduled',
            name: 'Campaign 3',
            goal: 'Goal 3'
          }
        ]
      }
    };
    const props = {
      classes: {}
    };

    getCampaigns.mockImplementation(() => new Promise((resolve, reject) => resolve(result)));
    const wrapper = shallow(<Home {...props} />);

    wrapper.setState({campaigns: state.campaigns, splittedCampaigns: state.splittedCampaigns});
    wrapper.update();
    expect(wrapper.find(GroupedList).length).toBe(3);
  });

  // // TODO: backend call fail case
  // // TODO: when empty state

  // it('should render items loaded from backend', () => {
    // const state = {
    //   campaigns: [
    //     {
    //       id: 1,
    //       status: 'Delivering',
    //       name: 'Campaign 1',
    //       goal: 'Goal 1'
    //     },
    //     {
    //       id: 2,
    //       status: 'Ended',
    //       name: 'Campaign 2',
    //       goal: 'Goal 2'
    //     },
    //     {
    //       id: 3,
    //       status: 'Scheduled',
    //       name: 'Campaign 3',
    //       goal: 'Goal 3'
    //     }
    //   ],
    //   splittedCampaigns: {
    //     Delivering: [
    //       {
    //         id: 1,
    //         status: 'Delivering',
    //         name: 'Campaign 1',
    //         goal: 'Goal 1'
    //       }
    //     ],
    //     Ended: [
    //       {
    //         id: 1,
    //         status: 'Delivering',
    //         name: 'Campaign 1',
    //         goal: 'Goal 1'
    //       }
    //     ],
    //     Scheduled: [
    //       {
    //         id: 3,
    //         status: 'Scheduled',
    //         name: 'Campaign 3',
    //         goal: 'Goal 3'
    //       }
    //     ]
    //   }
    // };
  //   const props = {
  //     classes: {}
  //   };

  //   getCampaigns.mockImplementation(() => new Promise((resolve, reject) => reject('error')));
  //   const wrapper = shallow(<Home {...props} />);
  //   const promise = Promise.resolve();
  //   promise.then(() => {
  //     expect(wrapper.find(GroupedList).length).toBe(1);
  //   });
  // });

});