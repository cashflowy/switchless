import React from 'react';
import Logo from './Logo';

export default {
  title: 'Exported via npm/Styled/Page/Logo',
  component: Logo,
  argTypes: {
    offering: { type: 'string', control: 'text' },
    href: { type: 'string', control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    // offering: 'Transactions',
    // href: '/home',
  },
};

export const Transactions = {
  args: {
    offering: 'Transactions',
    href: '/home',
  },
};

export const POR = {
  args: {
    offering: 'POR',
    href: '/',
  },
};

export const Fetch = {
  args: {
    offering: 'Fetch',
  href: '/',
  },
};

