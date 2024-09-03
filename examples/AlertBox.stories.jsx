import React from 'react';
import AlertBox from './AlertBox';
import AlertBoxDocs from './AlertBox.md';
export default {
  title: 'Example Patterns/AlertBox',
  component: AlertBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:AlertBoxDocs,
      },
    },
  },
} 
const Template = (args) => <AlertBox {...args} />;

export const Normal = {
    args: {
      color: 'primary',
      variant: 'soft',
    },
  };


export const Success = {
    args: {
        color: 'success',
        variant: 'soft',
    },
}

export const Warning = {
  args: {
      color: 'warning',
      variant: 'soft',
  },
}

export const Error = {
  args: {
      color: 'danger',
      variant: 'soft',
  },
}
  