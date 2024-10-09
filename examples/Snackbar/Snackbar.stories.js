import React from 'react';
import Snackbar from './Snackbar';
import SnackbarDocs from './Snackbar.md';

export default {
  title: 'Example Patterns/Snackbar',
  component: Snackbar,
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
  args: {
    color: 'primary',
    content: 'Default color',
  },
};

export const Success = {
  args: {
    color: 'success',
    content: 'Success color',
  },
};

export const Warning = {
  args: {
    color: 'warning',
    content: 'Warning color',
  },
};

export const Error = {
  args: {
    color: 'danger',
    content: 'Error color',
  },
};