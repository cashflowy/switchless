import Pagination from './Pagination';
import PaginationDocs from './Pagination.md';

export default {
    title: 'Example Patterns/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: PaginationDocs,
            },
        },
    },

};

export const OnePage = {
    args: {},
};

export const MoreThanOnePage = {
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
