import React from 'react';
import GSheetIframe from './GSheetIframe';
import { Box } from '@mui/joy';

const src = "https://docs.google.com/spreadsheets/d/1V99UhzTIHYVrP6pLMj2L2Wpodk2nbiT5DYv96IJ3Q-8/edit?gid=2006652270#gid=2006652270"

export default {
  title: 'Exported via npm/Utility/GSheetIframe',
  component: GSheetIframe,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      // <Box sx={{ width: 920, height:600, m: 2 }}>
        <Story />
      // </Box>
    ),
  ],
  argTypes: {
    src: { control: 'text' },
  },
};

export const Default = {
  args: {
    src: src,
  },
};

