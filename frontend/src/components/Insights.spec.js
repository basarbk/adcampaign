import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { Insights } from './Insights';



describe('Insights Component', () => {

  it('should render properly', () => {
    const props = {
      classes: {},
      insights: {
        impressions: 0,
        clicks: 0,
        website_visits: 0,
        nanos_score: 0,
        cost_per_click: 0,
        click_through_rate: 0,
        advanced_kpi_1: 0,
        advanced_kpi_2: 0,
      }
    };
    const wrapper = shallow(<Insights {...props} />);
    expect(wrapper).not.toBeNull();
  });

  it('should render table with the row for only provided metrics', () => {
    const props = {
      classes: {},
      insights: {
        impressions: 0,
        clicks: 0,
        website_visits: 0,
      }
    };
    const wrapper = shallow(<Insights {...props} />);
    expect(wrapper.find(TableRow).length).toBe(3);
  });

  it('should append postfixes when necessary', () => {
    const props = {
      classes: {},
      insights: {
        impressions: 0,
        clicks: 0,
        website_visits: 0,
        nanos_score: 0,
        cost_per_click: 50,
        click_through_rate: 0.2,
        advanced_kpi_1: 0,
        advanced_kpi_2: 0,
      }
    };
    const wrapper = shallow(<Insights {...props} />);
    const tableContent = wrapper.find(TableBody).html();
    expect(tableContent).toContain('50 $');
    expect(tableContent).toContain('0.2 %');
  });

});