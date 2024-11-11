import React from 'react'
import PricingSection from './PricingSection'
import Documentation from './PricingSection.mdx'

export default {
  title: 'Example Patterns/Landing Page/PricingSection',
  component: PricingSection,
  tags: ['autodocs'],
  args: {
    priceList: [
      {
        type: {text:'Basic',color:'neutral'},
        header: 'Hobbyists',
        monthlyPrice: 'Free',
        featuresIncluded: [
          'One click data update',
          'No more manually creating reports every month',
          'Work on improving the reports',
        ],
        featuresExcluded: [
          'No custom models',
          'No custom models',
          'No custom models',
        ],
        signUpButton: { text: 'Sign up', link: 'https://fetch.cashflowy.io/signup' }
      },
      
      {
        type: {text:'Most Popular',color:'primary'},
        header: 'Professionals',
        monthlyPrice: 50,
        featuresIncluded: [
          'One click data update',
          'No more manually creating reports every month',
          'Work on improving the reports',
        ],
        featuresExcluded: [
          'No custom models',
          'No custom models',
          'No custom models',
        ],
        signUpButton: { text: 'Sign up', link: 'https://fetch.cashflowy.io/signup' }
      },
       
      {
        type: {text:'Enterprise',color:'neutral'},
        header: 'Enterprise',
        // monthlyPrice: 50,
        featuresIncluded: [
          'One click data update',
          'No more manually creating reports every month',
          'Work on improving the reports',
        ],
        featuresExcluded: [
          'No custom models',
          'No custom models',
          'No custom models',
        ],
        signUpButton: { text: 'Talk to Us', link: 'https://fetch.cashflowy.io/signup' }
      },

    ]
  },
  parameters: {
    docs: {
      page: Documentation
    }
  }
}

export const Default = {
  render: (args) => <PricingSection {...args} />
}