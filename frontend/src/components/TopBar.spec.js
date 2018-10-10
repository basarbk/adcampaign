import React from 'react';
import { shallow } from 'enzyme';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { TopBar } from './TopBar';



describe('TopBar Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      location: {
        pathname: '/',
      }};
    const wrapper = shallow(<TopBar {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render back icon when not home page', () => {
    const props = {
      classes: {},
      location: {
        pathname: '/subpage',
      },
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<TopBar {...props} />);
    expect(wrapper.find(ArrowBack).length).toBe(1);
  });

  it('should navigate to root page when clicking ArrowIcon', () => {
    const props = {
      classes: {},
      location: {
        pathname: '/subpage',
      },
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<TopBar {...props} />);
    const backIcon = wrapper.find(IconButton).at(0);
    backIcon.simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/');
  });
});