import React from 'react';
import PageHeader from './PageHeader';
import { Button } from '@mui/joy';

export default {
  title: 'Exported via npm/Styled/Page/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '800px', width: '100%', maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    header: {
      description: 'The main header text',
      control: 'text',
    },
    breadcrumbs: {
      description: 'Array of breadcrumb objects with text and optional href',
      control: 'object',
    },
    RightButtons: {
      description: 'Component for right-aligned buttons',
      control: 'object',
    },
  },
};

const sampleBreadcrumbs = [
  { text: 'Home', href: '/' },
  { text: 'Dashboard', href: '/dashboard' },
  { text: 'Current Page' },
];

const SampleRightButtons = () => (
  <>
    <Button variant="outlined" color="neutral" sx={{ mr: 1 }}>
      Cancel
    </Button>
    <Button>Save</Button>
  </>
);

export const Default = {
  args: {
    header: 'Sample Header',
    breadcrumbs: sampleBreadcrumbs,
  },
};

export const WithRightButtons = {
  args: {
    header: 'Header with Buttons',
    breadcrumbs: sampleBreadcrumbs,
    RightButtons: SampleRightButtons,
  },
};

export const LongHeader = {
  args: {
    header: 'This is a very long header to demonstrate wrapping behavior',
    breadcrumbs: sampleBreadcrumbs,
  },
};

export const NoBreadcrumbs = {
  args: {
    header: 'Header without Breadcrumbs',
    breadcrumbs: [],
  },
};
