import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import { DateComponent } from './DateComponent';



describe('Date Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      label: undefined,
      date: undefined
    };
    const wrapper = shallow(<DateComponent {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render only date when no label', () => {
    const props = {
      classes: {},
      label: undefined,
      date: new Date().getMilliseconds()
    };

    //eslint-disable-next-line
    console.error = jest.fn();

    const wrapper = shallow(<DateComponent {...props} />);
    expect(wrapper.find(Typography).length).toBe(1);
    expect(wrapper.find(Typography).at(0).html()).toContain('UTC');
  });

  it('should render label and date', () => {
    const props = {
      classes: {},
      label: 'Test label',
      date: new Date().getMilliseconds()
    };

    //eslint-disable-next-line
    console.error = jest.fn();

    const wrapper = shallow(<DateComponent {...props} />);
    expect(wrapper.find(Typography).length).toBe(2);
    expect(wrapper.find(Typography).at(0).html()).toContain(props.label);
  });
});