import React from 'react';
import CustomTab from './CustomTab';

export default {
  title: 'Styled/Page/CustomTab',
  component: CustomTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tabs: {
      description: 'Array of tab objects with name, slug, stats (optional), and body',
      control: 'object',
    },
    activeTab: {
      description: 'Slug of the active tab',
      control: 'text',
    },
    variant: {
      description: 'Variant of the tab panel',
      control: 'select',
      options: ['plain', 'outlined', 'soft'],
    },
  },
};

const sampleTabs = [
  {
    name: 'Quote',
    slug: 'quote',
    body: <>Quote content</>,
  },
  {
    name: 'Versions',
    slug: 'versions',
    stats: 4,
    body: <>Versions content</>,
  },
  {
    name: 'Compare',
    slug: 'compare',
    body: <>Compare content</>,
  },
  {
    name: 'Upload',
    slug: 'upload',
    body: <>Upload content</>,
  },
];

export const Default = {
  args: {
    tabs: sampleTabs,
    activeTab: 'versions',
    variant: 'plain',
  },
};

export const NoActiveTab = {
  args: {
    tabs: sampleTabs,
    variant: 'plain',
  },
};

export const OutlinedVariant = {
  args: {
    tabs: sampleTabs,
    activeTab: 'quote',
    variant: 'outlined',
  },
};