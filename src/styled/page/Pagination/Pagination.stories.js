import React from 'react';
import Pagination from './Pagination';

const mockRouter = {
  push: (url) => console.log('Navigating to:', url),
};

const mockSearchParams = new URLSearchParams('page=1');

export default {
  title: 'Exported via npm/Styled/Page/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered', 
  },
  argTypes: {
    pageCount: { control: 'number' },
    disabled: { control: 'boolean' },
    customRouter: { table: { disable: true } },
    customSearchParams: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    pageCount: 10,
    customRouter: mockRouter,
    customSearchParams: mockSearchParams,
  },
};

export const Disabled = {
  args: {
    pageCount: 5,
    disabled: true,
    customRouter: mockRouter,
    customSearchParams: mockSearchParams,
  },
};

export const CustomPage = {
  args: {
    pageCount: 10,
    customRouter: mockRouter,
    customSearchParams: new URLSearchParams('page=3'),
  },
};

