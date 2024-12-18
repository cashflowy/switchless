import React from 'react';
import FoldFilterContainer from './FoldFilterContainer';
import { Box, List, ListItem, Typography } from '@mui/joy';

export default {
  title: 'Exported via npm/Styled/Page/FoldFilterContainer',
  component: FoldFilterContainer,
  parameters: {
    layout: 'fullscreen', // Using fullscreen since this is a layout component
  },
};

// Helper components for the stories
const SampleFilterColumn = () => (
  <Box sx={{ p: 2, bgcolor: 'primary.100' }}>
    <Typography level="h4">Custom Filter Panel</Typography>
    <Typography>Custom filter content here</Typography>
  </Box>
);

const SampleContentColumn = () => (
  <Box sx={{ p: 2, bgcolor: 'success.100' }}>
    <Typography level="h4">Custom Main Content</Typography>
    <Typography>Custom main content here</Typography>
  </Box>
);


// Story with custom content
export const LaptopView = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop',
    },
  },
  args: {
    columnOne: <SampleFilterColumn />,
    columnTwo: <SampleContentColumn />,
    searchParams: {},
  },
};

// Mobile view story
export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    columnOne: <SampleFilterColumn />,
    columnTwo: <SampleContentColumn />,
    searchParams: {},
  },
}; 