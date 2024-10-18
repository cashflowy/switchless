import React from 'react';
import MetricCard from './MetricCard';

export default {
  title: 'Exported via npm/Utility/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    value: { control: 'number' },
    previousValue: { control: 'number' },
    width: { control: 'text' },
    currency: { control: 'select', options: ['USD', 'INR', 'EUR'] },
    locale: { control: 'select', options: ['en-US', 'en-IN'] },
  },
};

export const Default = {
  args: {
    title: 'Revenue',
    value: 12000,
    previousValue: 10000,
    currency: 'INR',
  },
};


export const PositiveChange = {
  args: {
    title: 'Positive Change',
    value: 12000,
    previousValue: 10000,
    currency: 'USD',
  },
};

export const NegativeChange = {
    args: {
      title: 'Negative Change',
      value: 800000,
      previousValue: 1000000,
      currency: 'USD',

    },
  };
  
  export const NoChange = {
    args: {
      title: 'No Change',
      value: 1000000,
      previousValue: 1000000,
      currency: 'USD',
    },
  };

  
  export const INRCurrency = {
    args: {
      title: 'Revenue (INR)',
      value: 12345678,
      previousValue: 10000000,
      currency: 'INR',
      locale: 'en-IN',
    },
  };
  export const USDCurrency = {
    args: {
      title: 'Revenue (USD)',
      value: 12345678,
      previousValue: 10000000,
      currency: 'USD',
      locale: 'en-US',
    },
  };
  export const EURCurrency = {
    args: {
      title: 'Revenue (EUR)',
      value: 12345678,
      previousValue: 10000000,
      currency: 'EUR',
      locale: 'en-US',
    },
  };

  export const CustomWidth = {
    args: {
      title: 'Profit',
      value: 15000,
      previousValue: 12000,
      width: '400px',
      currency: 'USD',
      locale: 'en-US',
    },
  };

export const LargeNumber = {
    args: {
      title: 'Total Assets',
      value: 1234567890,
      previousValue: 1000000000,
      width: '300px',
      currency: 'USD',
      locale: 'en-US',
    },
  };