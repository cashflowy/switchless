import React from 'react';
import Pagination2 from './Pagination2';



export default {
  title: 'Exported via npm/Styled/Page/Pagination2',
  component: Pagination2,
  parameters: {
    layout: 'centered', 
  },
  argTypes: {
    pageCount: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    pageCount: 10,
    mock:{
      searchParams:new URLSearchParams('page=1'), 
    }
  },
};
