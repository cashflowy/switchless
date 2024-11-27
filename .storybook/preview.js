/** @type { import('@storybook/react').Preview } */
import { Preview } from '@storybook/react';
 
import { themes } from '@storybook/theming';
import './storybook.css';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Installation', // Specific section names (case-sensitive)
          'List of Contents',
        ],
      },
    },
    docs: {
      theme: {
        ...themes.light,
        typography: {
          fontSize: '20px',
          lineHeight: 1.5,
        }
      }
    }
  },
};
export default preview;
