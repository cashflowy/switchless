import React from 'react';
import OrgCard from './OrgCard';
import OrgCardDocs from './OrgCard.mdx'

export default {
  title: 'Example Patterns/OrgCard',
  component: OrgCard,
  parameters: {
    layout: 'centered',
  },
  
};

export const Default = {
  args: {
    name:'Joel',
    createdAt:"23rd Aug, 2024"
  },
};
