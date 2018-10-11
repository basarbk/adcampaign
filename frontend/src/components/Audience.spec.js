import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import { Audience } from './Audience';


describe('Audience Component', () => {
  it('should render properly', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: [],
        age_range: [],
        locations: [],
        KeyWords: []
      }
    };
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should not display fields when all arrays are empty', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: [],
        age_range: [],
        locations: [],
        KeyWords: []
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.html()).not.toContain('Languages');
    expect(wrapper.html()).not.toContain('Genders');
    expect(wrapper.html()).not.toContain('Age Range');
    expect(wrapper.html()).not.toContain('Locations');
    expect(wrapper.html()).not.toContain('Keywords');
  });

  it('should display languages', () => {
    const props = {
      classes: {},
      audience: {
        languages: ['EN'],
        genders: [],
        age_range: [],
        locations: [],
        KeyWords: []
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain('Languages');
  });


  it('should display genders', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: ['M', 'F'],
        age_range: [],
        locations: [],
        KeyWords: []
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain('Genders');
  });

  
  it('should display age range', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: [],
        age_range: [20,50],
        locations: [],
        KeyWords: []
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain('Age Range');
  });

  it('should display locations', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: [],
        age_range: [],
        locations: ['Switzerland'],
        KeyWords: []
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain('Locations');
  });

  it('should display keywords', () => {
    const props = {
      classes: {},
      audience: {
        languages: [],
        genders: [],
        age_range: [],
        locations: [],
        KeyWords: ['testkeyword']
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    const wrapper = shallow(<Audience {...props} />);
    expect(wrapper.find(Typography).at(0).html()).toContain('Keywords');
  });

});