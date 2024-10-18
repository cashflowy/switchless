import React from 'react';
import ConfirmationModal from './ConfirmationModal';

export default {
  title: 'Example Patterns/ConfirmationModal',
  component: ConfirmationModal,
  parameters: {
    layout: 'centered',
  },
};


export const Default = {
  args: {
    member: {
      user: {
        name: 'John Doe',
      },
    },
  },
};


