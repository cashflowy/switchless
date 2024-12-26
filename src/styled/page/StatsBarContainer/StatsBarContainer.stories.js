import React from 'react';
import StatsBarContainer from './StatsBarContainer';

export default {
  title: 'Exported via npm/Styled/Page/StatsBarContainer',
  component: StatsBarContainer,
  parameters: {
    // layout: 'centered', 
  },
  // tags: ['autodocs'],
};

// Basic metrics story
export const BasicMetrics = {
  args: {
    items: [
      { type: 'metric', label: 'Revenue', value: 150000, color: 'success' },
      { type: 'metric', label: 'Expenses', value: -50000, color: 'warning' },
      { type: 'divider' },
      { type: 'metric', label: 'Profit', value: 100000 },
    ],
  },
};

// Story with zero values
export const WithZeroValues = {
  args: {
    items: [
      { type: 'metric', label: 'Pending', value: 0 },
      { type: 'divider' },
      { type: 'metric', label: 'Processing', value: 0 },
      { type: 'divider' },
      { type: 'metric', label: 'Completed', value: 0 },
    ],
  },
};

// Story with many items to demonstrate scrolling
export const ManyItems = {
  args: {
    items: [
      { type: 'metric', label: 'Revenue', value: 150000 },
      { type: 'divider' },
      { type: 'metric', label: 'Expenses', value: -50000 },
      { type: 'divider' },
      { type: 'metric', label: 'Profit', value: 100000 },
      { type: 'divider' },
      { type: 'metric', label: 'Customers', value: 1234 },
      { type: 'divider' },
      { type: 'metric', label: 'Orders', value: 5678 },
      { type: 'divider' },
      { type: 'metric', label: 'Returns', value: 123 },
    ],
  },
};

// Story with custom children
export const WithChildren = {
  args: {
    items: [
      { type: 'metric', label: 'Total', value: 100000 },
      { type: 'divider' },
    ],
    children: <div style={{ padding: '8px' }}>Custom Content</div>,
  },
};
