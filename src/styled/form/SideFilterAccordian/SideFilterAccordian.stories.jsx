import React from 'react';
import SideFilterAccordian from './SideFilterAccordian';

export default {
  title: 'Exported via npm/Styled/Form/SideFilterAccordian',
  component: SideFilterAccordian,
  parameters: {
    // layout: 'centered',
  },
  // tags: ['autodocs'],
};

// Basic story with a simple filter content
export const LaptopView = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop',
    },
  },
  args: {
    children: (
      <div style={{ padding: '8px' }}>
        <p>Filter Form content goes here</p>
      </div>
    ),
  },
};

// Story demonstrating mobile view (collapsed by default)
export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    children: (
      <div style={{ padding: '8px' }}>
        <p>This will be collapsed by default on mobile</p>
      </div>
    ),
  },
};
