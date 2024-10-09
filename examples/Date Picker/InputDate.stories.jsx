import React from 'react';
import InputDate from './InputDate';
import InputDateDocs from './InputDate.md';

export default {
  title: 'Example Patterns/Input/Date',
  component:  InputDate,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: InputDateDocs,
      },
    },
  },
};

export const Default = {
  args: {},
};

export const WithDefaultValue = {
  args: {
    defaultValue: '2024-01-01',
  },
};

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
