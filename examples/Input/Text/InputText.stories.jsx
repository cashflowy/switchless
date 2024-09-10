import React from 'react';
import InputText from './InputText';
import InputTextDocs from './InputText.md';

export default {
  title: 'Example Patterns/Input/Text',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: InputTextDocs,
      },
    },
  },
};

export const Default = {
  args: {},
};

// export const WithDefaultValue = {
//   args: {
//     defaultValue: "2024-01-01",
//   },
// };

// export const WithDefaultValue = {
//   args: {
//     defaultValue: '2023-05-15',
//   },
// };

// export const Disabled = {
//   args: {
//     disabled: true,
//   },
// };
