import React from 'react';
import LoadingScreen from './LoadingScreen';
import LoadingScreenDocs from './LoadingScreen.md';

export default {
  title: 'Example Patterns/LoadingScreen',
  component: LoadingScreen,
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
