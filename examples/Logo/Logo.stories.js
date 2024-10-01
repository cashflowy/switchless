import React from 'react';
import Logo from './Logo';

export default {
  title: 'Example Patterns/Logo',
  component: Logo,
  argTypes: {
    offering: { control: 'text' },
    href: { control: 'text' },
    sx: { control: 'object' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  offering: 'Cashflowy',
  href: '/',
};
export const CustomHref = Template.bind({});
CustomHref.args = {
  offering: 'Cashflowy',
  href: '/cashflowy',
};

export const Transactions = Template.bind({});
Transactions.args = {
  offering: 'Transactions',
  href: '/home',
};

export const POR = Template.bind({});
POR.args = {
  offering: 'POR',
  href: '/',
};
export const Fetch = Template.bind({});
Fetch.args = {
  offering: 'Fetch',
  href: '/',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  offering: 'Cashflowy',
  href: '/',
  sx: { backgroundColor: 'lightgray', padding: '10px' },
};

