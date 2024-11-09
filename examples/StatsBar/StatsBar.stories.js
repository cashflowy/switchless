
import React from 'react';
import StatsBar from './StatsBar';

export default {
  title: 'Example Patterns/StatsBar',
  component: StatsBar,
  parameters: {
    layout: 'centered',
  },
};

const sampleStats = {
  total: {
    net_change: 1000,
    inflow: 5000,
    outflow: 4000,
    income: 3000,
    expense: 2000,
    transfer_in: 1500,
    transfer_out: 1000,
  },
  count: 10,
};

export const Default = {
  args: {
    stats: sampleStats,
  },
};