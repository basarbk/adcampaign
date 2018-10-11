import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const INSIGHTS = {
  impressions: {
    label: 'Impressions',
  },
  clicks: {
    label: 'Clicks',
  },
  website_visits: {
    label: 'Website Visits'
  },
  nanos_score: {
    label: 'Nano Score'
  },
  cost_per_click: {
    label: 'Cost Per Click',
    postfix: '$'
  },
  click_through_rate: {
    label: 'Click Through Rate',
    postfix: '%'
  },
  advanced_kpi_1: {
    label: 'Advanced KPI 1'
  },
  advanced_kpi_2: {
    label: 'Advanced KPI 2'
  },
};

export const Insights = props => {
  const {insights} = props;
  return (
    <Table>
      <TableBody>
        {Object.keys(insights).map(insight => {
          const metric = INSIGHTS[insight];
          return (
            <TableRow key={metric.label}>
              <TableCell component="th" scope="row">
                {metric.label}
              </TableCell>
              <TableCell numeric>{insights[insight]} {metric.postfix || ''}</TableCell>
              
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

Insights.propTypes = {
  insights: PropTypes.shape({
    impressions: PropTypes.number,
    clicks: PropTypes.number,
    website_visits: PropTypes.number,
    nanos_score: PropTypes.number,
    cost_per_click: PropTypes.number,
    click_through_rate: PropTypes.number,
    advanced_kpi_1: PropTypes.number,
    advanced_kpi_2: PropTypes.number,
  })
};

export default Insights;