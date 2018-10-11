import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Creatives } from './Creatives';



describe('Creatives Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      creatives: {
        description: undefined,
        header: undefined,
        header_1: undefined,
        header_2: undefined,
        image: undefined,
        url: undefined
      }
    };
    const wrapper = shallow(<Creatives {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should display header instead of header_1 when both exist', () => {
    const props = {
      classes: {},
      creatives: {
        description: undefined,
        header: 'Header',
        header_1: 'Header 1',
        header_2: 'Sub header',
        image: undefined,
        url: undefined
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();

    const wrapper = shallow(<Creatives {...props} />);
    expect(wrapper.find(CardHeader).at(0).html()).toContain(props.creatives.header);
    expect(wrapper.find(CardHeader).at(0).html()).not.toContain(props.creatives.header_1);
    expect(wrapper.find(CardHeader).at(0).html()).not.toContain(props.creatives.header_2);
  });

  it('should display header_1 and header_2 when header does not exist', () => {
    const props = {
      classes: {},
      creatives: {
        description: undefined,
        header: undefined,
        header_1: 'Header 1',
        header_2: 'Sub header',
        image: undefined,
        url: undefined
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Creatives {...props} />);
    expect(wrapper.find(CardHeader).at(0).html()).toContain(props.creatives.header_1);
    expect(wrapper.find(CardHeader).at(0).html()).toContain(props.creatives.header_2);
  });

  it('should display image and description as alt', () => {
    const props = {
      classes: {},
      creatives: {
        description: 'Test description',
        header: undefined,
        header_1: 'Header 1',
        header_2: 'Sub header',
        image: '/testimage.png',
        url: undefined
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Creatives {...props} />);
    expect(wrapper.find(CardMedia).at(0).html()).toContain(props.creatives.description);
    expect(wrapper.find(CardMedia).at(0).html()).toContain(props.creatives.image);
  });

  it('should display description with url', () => {
    const props = {
      classes: {},
      creatives: {
        description: 'Test description',
        header: undefined,
        header_1: 'Header 1',
        header_2: 'Sub header',
        image: '/testimage.png',
        url: 'http://testurl.com'
      }
    };
    //eslint-disable-next-line
    console.error = jest.fn();
    
    const wrapper = shallow(<Creatives {...props} />);
    expect(wrapper.find(CardContent).at(0).html()).toContain(props.creatives.description);
    expect(wrapper.find(CardContent).at(0).html()).toContain(props.creatives.url);
  });

});