import React from 'react';
import { shallow } from 'enzyme';
import Icon from '@material-ui/core/Icon';
import { Status, STATUS_ICONS } from './Status';


describe('Status Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      status: 'Delivering',
      iconVisible: true,
      textVisible: true
    };
    const wrapper = shallow(<Status {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render icon when not provided as property', () => {
    const props = {
      classes: {},
      status: 'Delivering',
      iconVisible: true
    };
    const wrapper = shallow(<Status {...props} />);    
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it('should not render icon when iconVisible set to false', () => {
    const props = {
      classes: {},
      status: 'Delivering',
      iconVisible: false
    };
    const wrapper = shallow(<Status {...props} />);    
    expect(wrapper.find(Icon).length).toBe(0);
  });

  it('should not render status text when textVisible is not provided', () => {
    const props = {
      classes: {},
      status: 'Delivering',
    };
    const wrapper = shallow(<Status {...props} />);    
    expect(wrapper.find('span').length).toBe(0);
  });

  it('should render status text when textVisible is provided as true', () => {
    const props = {
      classes: {},
      status: 'Delivering',
      textVisible: true
    };
    const wrapper = shallow(<Status {...props} />);    
    expect(wrapper.find('span').length).toBe(1);
  });

  it('should display Icon with styles of Delivering status', () => {
    const props = {
      classes: {},
      status: 'Delivering',
    };
    const wrapper = shallow(<Status {...props} />);    
    const style = STATUS_ICONS[props.status];
    expect(wrapper.html().toString()).toContain(style.color);
    expect(wrapper.html().toString()).toContain(style.icon);
  });

  it('should display Icon with styles of Scheduled status', () => {
    const props = {
      classes: {},
      status: 'Scheduled',
    };
    const wrapper = shallow(<Status {...props} />);    
    const style = STATUS_ICONS[props.status];
    expect(wrapper.html().toString()).toContain(style.color);
    expect(wrapper.html().toString()).toContain(style.icon);
  });

  it('should display Icon with styles of Ended status', () => {
    const props = {
      classes: {},
      status: 'Ended',
    };
    const wrapper = shallow(<Status {...props} />);    
    const style = STATUS_ICONS[props.status];
    expect(wrapper.html().toString()).toContain(style.color);
    expect(wrapper.html().toString()).toContain(style.icon);
  });

});