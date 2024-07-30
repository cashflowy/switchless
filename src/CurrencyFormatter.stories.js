import Component from './CurrencyFormatter';

export default {
  title: 'Switchless/CurrencyFormatter',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currency: {
      description: 'The currency code (e.g., "INR" or "USD")',
      control: 'select',
      options: ['INR', 'USD'],
      defaultValue: 'INR',
    },
    value: {
      description: 'The numeric value to be formatted',
      control: 'number',
      defaultValue: 1000,
    },
  },
};

// Basic INR formatting
export const BasicINR = {
  args: {
    currency: 'INR',
    value: 1234.56,
  },
};

// INR in Lakhs
export const INRLakhs = {
  args: {
    currency: 'INR',
    value: 500000,
  },
};

// INR in Crores
export const INRCrores = {
  args: {
    currency: 'INR',
    value: 10000000,
  },
};

// Basic USD formatting
export const BasicUSD = {
  args: {
    currency: 'USD',
    value: 1234.56,
  },
};

// USD in Thousands
export const USDThousands = {
  args: {
    currency: 'USD',
    value: 5000,
  },
};

// USD in Millions
export const USDMillions = {
  args: {
    currency: 'USD',
    value: 10000000,
  },
};

// Large number formatting
export const LargeNumber = {
  args: {
    currency: 'USD',
    value: 1234567890.12,
  },
};

// Small number formatting
export const SmallNumber = {
  args: {
    currency: 'INR',
    value: 0.99,
  },
};