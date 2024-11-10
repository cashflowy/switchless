import React from 'react'
import ViewDocFromS3 from './ViewDocFromS3'
import Documentation from './ViewDocFromS3.mdx?raw'

export default {
  title: 'Example Patterns/ViewDocFromS3',
  component: ViewDocFromS3,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation
      }
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: false },
      canvas: { hidden: true }
    }
  }
}

export const Hidden = {
  render: () => <ViewDocFromS3 />,
  parameters: {
    docs: {
      disable: true
    }
  }
}