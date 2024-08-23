import Component from './Date';
// import { fn } from '@storybook/test';

export default {
  title: 'Styled/Date/Date',
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    d: {
      description: 'The date string in ISO format',
      control: 'date',
      defaultValue: new Date().toISOString(),
    },
  },
  // args: {
  //   onLogin: fn(),
  //   onLogout: fn(),
  //   onCreateAccount: fn(),
  // },
};


export const Primary={
  args:{
    d:new Date().toISOString()
  }
}

export const CustomDate = {
  args: {
    d: '2023-12-25T12:00:00Z',
  },
};

export const InvalidDate = {
  args: {
    d: 'Invalid Date',
  },
};