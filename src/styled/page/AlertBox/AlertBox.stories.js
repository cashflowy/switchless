import React from 'react';
import AlertBox from './AlertBox';

export default {
  title: 'Exported via NPM/Styled/Page/AlertBox',
  component: AlertBox,
};

export const Default = {
    args: {
        title: 'Data missing',
        message: 'No Data to show. Adjust filter or create data.'
    }
};

export const NoIcon = {
    args: {
        ...Default.args,
        icon: false
    }
}

export const OtherColor = {
    args: {
        ...Default.args,
        color: 'success'
    }
}