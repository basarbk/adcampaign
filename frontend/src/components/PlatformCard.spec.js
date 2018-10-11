import React from 'react';
import { shallow } from 'enzyme';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { PlatformCard, ExpandableContent, getImage } from './PlatformCard';
import facebookLogo from '../icons/facebook.svg';
import instagramLogo from '../icons/instagram.svg';
import googleLogo from '../icons/google.svg';




describe('PlatformCard Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      platform: 'facebook',
      content: {
        remaining_budget: 0,
        total_budget: 0,
        start_date: undefined,
        end_date: undefined,
        status: 'Delivering',
        target_audiance: {},
        creatives: {},
        insights: {}
      }};
    const wrapper = shallow(<PlatformCard {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render platform information', () => {
    const props = {
      classes: {},
      platform: 'facebook',
      content: {
        remaining_budget: 0,
        total_budget: 0,
        start_date: undefined,
        end_date: undefined,
        status: 'Delivering',
        target_audiance: {},
        creatives: {},
        insights: {}
      }};
      
    //eslint-disable-next-line
    console.error = jest.fn();

    const wrapper = shallow(<PlatformCard {...props} />);
    expect(wrapper.find(CardMedia).at(0).html()).toContain(props.platform);
    expect(wrapper.find(Typography).at(0).html()).toContain(props.platform);
  });

  describe('getImage test', () => {

    it('should return facebook logo', () => {
      const image = getImage('facebook');
      expect(image).toBe(facebookLogo);
    });

    
    it('should return google logo', () => {
      const image = getImage('google');
      expect(image).toBe(googleLogo);
    });

    it('should return instgram logo', () => {
      const image = getImage('instagram');
      expect(image).toBe(instagramLogo);
    });
  });

  describe('ExpandableContent Component', () => {

    it('should render properly', () => {
      const props = {
        classes: {},
        label: 'Test Label'
      };
      const wrapper = shallow(<ExpandableContent {...props}><span>Test</span></ExpandableContent>);
      
      //eslint-disable-next-line
      console.error = jest.fn();
      expect(wrapper).not.toBeNull();
      expect(wrapper.find(ExpansionPanel).length).toBe(1);
    });
  });
});