import React from 'react';
import CustomSnackbar from './CustomSnackbar';
import InfoIcon from '@mui/icons-material/Info';


export default {
  title: 'Exported via npm/Styled/Page/CustomSnackbar',
  component: CustomSnackbar,
  parameters: {
    layout: 'centered',
  },
};
export const Default = {
  args: {
    color: 'primary',
    content: 'Default color',
  },
};
export const Success = {
  args: {
    color: 'success',
    content: 'Success color',
    icon: <InfoIcon />,
  },
};

export const Warning = {
  args: {
    header: 'Warning!',
    color: 'warning',
    content: 'This is a warning message.',
  },
};

export const Error = {
  args: {
    color: 'danger',
    content: 'Error occurred!',
  },
};

export const CustomHeader = {
  args: {
    header: 'Custom Header',
    color: 'primary',
    content: 'This snackbar has a custom header.',
  },
};

export const SnackbarWithIcon = {
  args: {
    color: 'success',
    content: 'Snackbar with an icon!',
    icon: <InfoIcon />,
  },
};