import React from 'react';
import TextField from './TextField';

export default {
  title: 'Exported via npm/Primitives/TextField',
  component: TextField,

  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text', description: 'Name attribute for the input' },
    defaultValue: { control: 'text', description: 'Default value for the input' },
    placeholder: { control: 'text', description: 'Placeholder text for the input' },
    label: { control: 'text', description: 'Label for the input field' },
    required: { control: 'boolean', description: 'Whether the field is required' },
    type: { 
      control: 'select', 
      options: ['text', 'number', 'email', 'password'],
      description: 'Type of the input field'
    },
    step: { control: 'number', description: 'Step attribute for number inputs' },
    disabled: { control: 'boolean', description: 'Whether the field is disabled' },
    hidden: { control: 'boolean', description: 'Whether the field is hidden' },
  },
};

export const Default = {
  args: {
    name: 'default',
    label: 'Default Input',
    placeholder: 'Enter text here',
  },
};

export const Required = {
  args: {
    name: 'required',
    label: 'Required Input',
    placeholder: 'This field is required',
    required: true,
  },
};

export const NumberInput = {
  args: {
    name: 'number',
    label: 'Number Input',
    type: 'number',
    step: 0.01,
    placeholder: 'Enter a number',
  },
};

export const WithDecorators = {
  args: {
    name: 'decorated',
    label: 'Input with Decorators',
    startDecorator: '$',
    endDecorator: '.00',
    type: 'number',
    placeholder: 'Enter amount',
  },
};

export const Disabled = {
  args: {
    name: 'disabled',
    label: 'Disabled Input',
    defaultValue: 'This input is disabled',
    disabled: true,
  },
};

export const Password = {
  args: {
    name: 'password',
    label: 'Password Input',
    type: 'password',
    placeholder: 'Enter your password',
  },
};
