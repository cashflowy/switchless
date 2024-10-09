import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Example Patterns/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <h1>Main Content Area</h1>
          <p>This is where your main content would go.</p>
        </div>
      </div>
    ),
  ],
};

export const Default = {
  args: {},
};

export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const DarkMode = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};