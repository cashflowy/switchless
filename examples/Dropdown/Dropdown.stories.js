import React from 'react';
import Dropdown from './Dropdown';
import DropdownDocs from './Dropdown.md';

export default {
  title: 'Example Patterns/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:DropdownDocs,
      },
    },
  },
  
};

export const Default = {
  args: {},
};
