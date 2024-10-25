/** @type { import('@storybook/react').Preview } */
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
  },
};
export default preview;
