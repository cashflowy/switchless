import React from 'react';
import SelectMenu from './SelectMenu';
import SelectMenuDocs from './SelectMenu.md';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default {
  title: 'Example Patterns/Input/Select',
  component: SelectMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: SelectMenuDocs,
      },
    },
  },
};

export const Default = {
  args: {   
    options: options
  },
};

export const WithCustomLabel = {
  args: {
    label: 'Custom Label',
    options: options
  },
};

export const WithDefaultValue = {
  args: {
    defaultValue: 'true',
    options: options
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const NoOptions = {
  args: {
    
  },
};
