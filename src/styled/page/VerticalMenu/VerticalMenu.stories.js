import React from 'react';
import VerticalMenu from './VerticalMenu';  

export default {
  title: 'Exported via npm/Styled/Page/VerticalMenu',
  component: VerticalMenu,
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



export const Default = {
  args: {
    items:[
      {
        name:'General',
        href:`/1/settings/general`,
      },
      {
        name:'Clockify',
        href:`/1/settings/clockify`,
      },
      {
        name:'Members',
        href:`/1/settings/members`,
      },
      {
        name:'API keys',
        href:`/1/settings/apikeys`,
      },
      {
        name:'Preferences',
        href:`/1/settings/preferences`,
      },
    ]
  },
};

// export const VerticalTabs = {
//   args: {
//     tabHeaders: sampleTabs,
//     vertical: true,
//   },
// };

// export const WithoutCounts = {
//   args: {
//     tabHeaders: sampleTabs.map(({ header }) => ({ header })),
//     vertical: false,
//   },
// };