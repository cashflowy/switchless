import React from 'react';
import NumberFormatter from './NumberFormatter';

export default {
  title: 'Exported via npm/Utility/NumberFormatter/NumberFormatter',
  component: NumberFormatter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    style: {
      control: 'select',
      options: ['US', 'IN'],
    },
    precision: { control: 'number', defaultValue: 2 },
  },
};
export const Default = {
  args: {
    value: 1234567,
    style: 'US',
    precision: 2,
  },
};

export const USSmallNumber = {
  args: {
    value: 1234.56,
    style: 'US',
  },
};

export const USLargeNumber = {
  args: {
    value: 13000000000,
    style: 'US',
  },
};

export const INSmallNumber = {
  args: {
    value: 1234.56,
    style: 'IN',
  },
};

export const INLargeNumber = {
  args: {
    value: 1234567890,
    style: 'IN',
  },
};

export const PrecisionZero = {
  args: {
    value: 1234567,
    style: 'US',
    precision: 0,
  },
};

export const PrecisionFour = {
  args: {
    value: 1234567,
    style: 'US',
    precision: 4,
  },
};

