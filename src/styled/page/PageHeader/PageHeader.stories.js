import React from 'react';
import { Button, Box } from '@mui/joy';
import PageHeader from './PageHeader.jsx';

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
  title: 'Exported via npm/Styled/Page/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen', 
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


// Simple Header is not centered. Should it be?
export const simpleHeader = {
  args: {
    header: 'Simple Header',
    headerLevel: 'h2',

  }
}
export const OnePartHeader = {
  args: {
    header: { part1: 'One Part' },
    headerLevel: 'h3',
    breadcrumbs: [
      { text: 'Home', href: '/' },
      { text: 'Section', href: '/section' },
      { text: 'Current Page' },
    ],
  }
}

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


/* -------------------------------------------------------------------------- */
/*                             Changes to be made:                            */
// Solve the error found when you configure the breadcrumbs prop in the storybook docs
/* -------------------------------------------------------------------------- */

