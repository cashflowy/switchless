import React from 'react';
import { Button } from '@mui/joy';
import PageHeaderV2 from './PageHeaderV2.jsx';
import Box from '@mui/joy/Box'; // Import Box from MUI Joy

const RightButtons1 = () => (
  <>
    <Button variant="outlined" color="primary" onClick={() => alert('Primary Action')}>
      Primary Action
    </Button>
  </>
)

const RightButtons2 = () => (
  <>
    <Button variant="outlined" color="primary" onClick={() => alert('Primary Action')}>
      Primary Action
    </Button>
    <Button variant="contained" color="secondary" onClick={() => alert('Secondary Action')}>
      Secondary Action
    </Button>
  </>
)

const RightButtons3 = () => (
  <>
    <Button variant="outlined" color="primary" onClick={() => alert('Edit')}>Edit</Button>
    <Button variant="contained" color="danger" onClick={() => alert('Delete')}>Delete</Button>
    <Button variant="soft" color="neutral" onClick={() => alert('More')}>More</Button>
  </>
)

export default {
  title: 'Exported via npm/Styled/Page/PageHeaderV2',
  component: PageHeaderV2,
  parameters: {
    layout: 'fullscreen', // Change to fullscreen for better display
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    header: {
      description: 'The header of the page',
      control: { type: 'text', options: ['string', 'object'] }
      },
    headerLevel: {
      description: 'The level of the header',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4']
    },
    breadcrumbs: {
      description: 'The breadcrumbs of the page',
      control: 'object'
    },
    RightButtons: {
      description: 'Right-aligned buttons component',
      options: ['None', 'Single Button', 'Two Buttons', 'Three Buttons'],
      mapping: {
        'None': null,
        'Single Button': RightButtons1,
        'Two Buttons': RightButtons2,
        'Three Buttons': RightButtons3,
      },
      control: {
        type: 'select',
      },
    },
  },
  
};

export const Default  = {
  args: {
    header: 'Default Page Header',
}
}
export const VaryingHeaderSizes  = {
  args: {
  header: 'Varying Header Sizes',
  breadcrumbs: [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' },
  ],
  headerLevel: 'h2',
}
};

export const WithRightButtons = {
  args: {
  header: 'Header with Right Buttons',
  RightButtons: RightButtons2,
  breadcrumbs: [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' },
  ],
}
};
export const WithBreadcrumbs  = {
  args: {
    header: 'Header with Breadcrumbs',
    headerLevel: 'h3',
    breadcrumbs: [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' },
  ],
}
};
export const TwoPartHeader =  {
  args: {
  header: { part1: 'Two ', part2: 'Part' },
  headerLevel: 'h3',
  breadcrumbs: [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' },
  ],
  RightButtons: () => (
    <>
      <Button onClick={()=>alert('Alert')}>Alert</Button>
    </>
  ),
}
};
export const ThreePartHeader = {
  args: { 
  header: { part1: 'Three ', part2: 'Part', part3: 'Header' },
  headerLevel: 'h3',
  breadcrumbs: [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' },
  ],
  RightButtons: () => (
    <>
      <Button onClick={() => alert('Alert')}>Alert</Button>
    </>
  ),
}
};

