import React from 'react';
import TabNavigation from './Tabnavigation';

export default {
  title: 'Exported via npm/Styled/Page/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tabHeaders: {
      control: 'object',
      description: 'Array of tab objects with header and optional count',
    },
    vertical: {
      control: 'boolean',
      description: 'Whether to display tabs vertically',
    },
  },
};

const sampleTabs = [
  { header: 'Tab 1', count: 5 },
  { header: 'Tab 2', count: 0 },
  { header: 'Tab 3', count: 10 },
  { header: 'Tab 4' },
];

export const Default = {
  args: {
    tabHeaders: sampleTabs,
    vertical: false,
  },
};

export const VerticalTabs = {
  args: {
    tabHeaders: sampleTabs,
    vertical: true,
  },
};

export const WithoutCounts = {
  args: {
    tabHeaders: sampleTabs.map(({ header }) => ({ header })),
    vertical: false,
  },
};

