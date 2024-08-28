import Pagination from './Pagination';
import PaginationDocs from './Pagination.md';

export default {
    title: 'Example Patterns/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:PaginationDocs,
        },
      },
    },
    
  };

export const Default = {
  args: {},
};



export const WithInitialPage = {
  args: {
    count: 10,
  },
};

export const Disabled = {
  args: {
    count: 10,
    disabled: true,
  },
};
