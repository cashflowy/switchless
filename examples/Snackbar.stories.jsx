import React from 'react';
import Snackbar from './Snackbar';
import SnackbarDocs from './Snackbar.md';

export default {
  title: 'Example Patterns/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      
      description: {
        component: SnackbarDocs,
      },
    },
  },
};

export const Default = {
  args: {},
};
