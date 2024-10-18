import React from 'react';
import LoomIframe from './LoomIframe';
import { Box } from '@mui/joy';

const src = "https://www.loom.com/share/ce6a688c678540cc88cb03c25efe9c20";

export default {
  title: 'Exported via npm/Utility/LoomIframe',
  component: LoomIframe,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 920, height: 600, m: 2 }}>
        <Story />
      </Box>
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

