import React from 'react';
import LoadingScreen from './LoadingScreen';
import LoadingScreenDocs from './LoadingScreen.md';

export default {
  title: 'Example Patterns/LoadingScreen',
  component: LoadingScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:LoadingScreenDocs,
      },
    },
  },
  
};

export const Default = {
  args: {},
};
