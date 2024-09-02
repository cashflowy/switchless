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

export const Default = {
    args: {},
  };

export const Outlined = {
      args: {
          color: 'success',
          variant: 'outlined',
      },
}

export const Soft = {
    args: {
        color: 'success',
        variant: 'soft',
    },
}

export const Solid = {
  args: {
      color: 'success',
      variant: 'solid',
  },
}
  