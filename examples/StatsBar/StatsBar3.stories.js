
import React from 'react';
import StatsBar3 from './StatsBar3';

// Define default export for Storybook
export default {
  title: 'Example Patterns/StatsBar3',
  component: StatsBar3,
  parameters: {
    layout: 'centered',
  },
};

const sampleStats = {
  count: 10,
  inflow: 5000,
  outflow: 4000,
  netChange: 1000,
  income: 3000,
  expense: 2000,
  transferIn: 1500,
  transferOut: 1000,
  startDate: '2024-01-01',
  endDate: '2024-12-31',
};

export const Default = {
  args: {
    ...sampleStats,
  },
};

export const small = {
args:{
  count: 10,
  inflow: 5000,
  outflow: 4000,
  netChange: 1000,
 }
}