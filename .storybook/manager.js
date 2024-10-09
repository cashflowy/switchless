import { addons } from '@storybook/manager-api';
import { docs } from '@storybook/theming';
import { create } from '@storybook/theming/create';

const myTheme = create({
//   base: 'dark',
  brandTitle: 'Cashflowy',
  brandUrl: 'https://cashflowy.io',
//   brandImage: '/cashflowy-logo.png',
  brandTarget: '_self',
})


addons.setConfig({
  theme: myTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
 
});