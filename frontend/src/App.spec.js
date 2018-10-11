import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App Page', () => {

  it('should render properly', () => {
    const props = {
      classes: {}
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).not.toBeNull();
  });
});