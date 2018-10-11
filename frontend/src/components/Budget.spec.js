import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import { Budget } from './Budget';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';


describe('Budget Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      currentBudget: 100,
      initialBudget: 100,
      label: 'Current',
      relativeStyle: true,
    };
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should not display label when its not provided', () => {
    const props = {
      classes: {},
      currentBudget: 100,
      initialBudget: 100,
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).length).toBe(1);
  });

  it('should display label', () => {
    const props = {
      classes: {},
      currentBudget: 100,
      initialBudget: 100,
      label: 'Test label'
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).length).toBe(2);
    expect(wrapper.find(Typography).at(0).html()).toContain(props.label);
  });

  it('should render with default color when relative style is not set', () => {
    const props = {
      classes: {},
      currentBudget: 100,
      initialBudget: 100,
      label: 'Current',
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).at(1).html()).not.toContain(green[500]);
  });

  it('should render with green when currentBudget within 60% range', () => {
    const props = {
      classes: {},
      currentBudget: 70,
      initialBudget: 100,
      label: 'Current',
      relativeStyle: true
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).at(1).html()).toContain(green[500]);
  });

  it('should render with orange when currentBudget within 30 to 60% range', () => {
    const props = {
      classes: {},
      currentBudget: 50,
      initialBudget: 100,
      label: 'Current',
      relativeStyle: true
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).at(1).html()).toContain(orange[500]);
  });

  it('should render with red when currentBudget under 30% range', () => {
    const props = {
      classes: {},
      currentBudget: 20,
      initialBudget: 100,
      label: 'Current',
      relativeStyle: true
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).at(1).html()).toContain(red[900]);
  });

  it('should render with default color when relative style is set but there is no currentBudget', () => {
    const props = {
      classes: {},
      initialBudget: 100,
      label: 'Current',
      relativeStyle: true
    };
    
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Budget {...props} />);
    expect(wrapper.find(Typography).at(1).html()).not.toContain(green[500]);
  });
});
