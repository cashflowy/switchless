import React from 'react';
import AutocompleteMenu from './Autocomplete';
import AutocompleteDocs from './Autocomplete.md';

const options = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
];

export default {
  title: 'Example Patterns/Input/Autocomplete',
  component: AutocompleteMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: AutocompleteDocs,
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
    defaultValue: options[0],
    options: options
  },
};

export const Disabled = {
  args: {
    disabled: true,
    options: options
  },
};

export const Multiple = {
  args: {
    multiple: true,
    options: options
  },
};

export const NoOptions = {
  args: {
    options: []
  },
};

