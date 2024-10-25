import React from 'react';
import Link from './Link';
import { Typography, Button, Chip } from '@mui/joy';


const exampleFunctions = {
  alertHello: () => alert('Hello!'),
  alertGoodbye: () => alert('Goodbye!'),
  consoleLog: () => console.log('Clicked!'),
}; 



export default {
  title: 'Exported via npm/Primitives/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    children: {
      description: 'The content to be displayed as the link text',
      control: 'text',
      type: { name: 'object', required: true },
    },
    href: {
      description: 'The URL that the hyperlink points to',
      control: 'text',
      type: { name: 'string', required: false },

    },
    sx: {
      description: `The sx prop that is passed to the Component as well as default JoyLink Component ( When no component prop is passed ). `,
      control: 'object'
    },
    target: {
      description: 'Specifies where to open the linked document',
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    onClick: {
      description: 'An onClick handler that is passed to the component.',
      options: Object.keys(exampleFunctions),
      mapping: exampleFunctions,
      control: {
        type: 'select',
        labels: {
          alertHello: 'Alert Hello',
          alertGoodbye: 'Alert Goodbye',
          consoleLog: 'Console Log',
        },
      },
    },
    Component: {
      description: 'An optional custom component that is wrapped in Next/Link. If not passed, the default is a Joy/Link component.',
      options: ['Button', 'Chip', 'default','CustomButton'],
      control: { type: 'select' },
      mapping: {
        Button: Button,
        CustomButton: ()=><Button>Custom Button</Button>,
        Chip: Chip,
        default: ''
      },
      defaultValue: 'default'
    },
  },
};

export const AllLinkVariations = () => (
  <Typography>
    <p><Link {...Default.args}>Default Link</Link></p>
    <p><Link {...CustomStyling.args}>Styled Link</Link></p>
    <p><Link {...CustomComponent.args}>Custom Component Link</Link></p>
  </Typography>
);

AllLinkVariations.storyName = 'All';

export const Default = {
  args: {
    href: 'https://www.example.com',
    children: 'Default Link',
  },
};



export const CustomStyling = {
  args: {
    href: 'https://www.example.com',
    children: 'Click Me',
    sx: {
      position: 'relative',
      display: 'inline-block',
      color: '#006400', // Dark green
      fontWeight: 'bold',
      fontSize: '1.2rem',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#006400', // Dark green
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: 'transform 0.3s ease',
      },
      '&:hover': {
        color: '#004d00', // Darker shade of green
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left',
        },
      },
      '&:focus': {
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(0, 100, 0, 0.3)', // Green shadow
      },
    }
  },
};

export const CustomComponent = {
  args: {
    href: 'https://www.example.com',
    children: 'Custom Component Link',
    Component: Button,
  },
};


