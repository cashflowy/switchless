import React from 'react'
import PricingSection from './PricingSection'

describe('PricingSection', () => {
  const mockPriceList = [
    {
      type: {
        text: 'Basic',
        color: 'primary'
      },
      header: 'Starter Plan',
      featuresIncluded: ['Feature 1', 'Feature 2'],
      featuresExcluded: ['Premium Feature 1'],
      monthlyPrice: 499,
      signUpButton: {
        text: 'Get Started',
        link: 'https://example.com/signup'
      }
    },
    {
      type: {
        text: 'Premium',
        color: 'warning'
      },
      header: 'Pro Plan',
      featuresIncluded: ['Feature 1', 'Feature 2', 'Premium Feature 1'],
      monthlyPrice: 'Contact Sales',
      signUpButton: {
        text: 'Contact Us',
        link: 'https://example.com/contact'
      }
    }
  ]

  beforeEach(() => {
    cy.mount(<PricingSection priceList={mockPriceList} />)
  })

  it.only('renders all pricing cards', () => {
    cy.get('[role="article"]').should('have.length', 2)
  })

  it('displays correct plan types and headers', () => {
    cy.get('[role="article"]').first().within(() => {
      cy.get('[role="button"]').should('contain', 'Basic')
      cy.get('h2').should('contain', 'Starter Plan')
    })

    cy.get('[role="article"]').last().within(() => {
      cy.get('[role="button"]').should('contain', 'Premium')
      cy.get('h2').should('contain', 'Pro Plan')
    })
  })

  it('renders included features with check icons', () => {
    cy.get('[role="article"]').first().within(() => {
      cy.get('li').should('have.length', 3) // 2 included + 1 excluded features
      cy.get('svg[data-testid="CheckIcon"]').should('have.length', 2)
    })
  })

  it('renders excluded features with close icons', () => {
    cy.get('[role="article"]').first().within(() => {
      cy.get('svg[data-testid="CloseIcon"]').should('have.length', 1)
    })
  })

  it('displays numeric monthly price correctly', () => {
    cy.get('[role="article"]').first().within(() => {
      cy.get('[class*="Typography-title"]').should('contain', '₹499')
      cy.get('[class*="Typography-title"]').should('contain', '/ user / month')
    })
  })

  it('displays string monthly price correctly', () => {
    cy.get('[role="article"]').last().within(() => {
      cy.get('[class*="Typography-title"]').should('contain', 'Contact Sales')
    })
  })

  it('renders signup buttons with correct links', () => {
    cy.get('[role="article"]').first().within(() => {
      cy.get('a').should('have.attr', 'href', 'https://example.com/signup')
      cy.get('a').should('contain', 'Get Started')
    })

    cy.get('[role="article"]').last().within(() => {
      cy.get('a').should('have.attr', 'href', 'https://example.com/contact')
      cy.get('a').should('contain', 'Contact Us')
    })
  })

  it('handles empty price list', () => {
    cy.mount(<PricingSection priceList={[]} />)
    cy.get('[role="article"]').should('not.exist')
  })

  it('verifies button attributes', () => {
    cy.get('a[target="_blank"]').each(($btn) => {
      cy.wrap($btn)
        .should('have.attr', 'target', '_blank')
        .and('have.class', /JoyButton-root/) // Assuming Joy UI adds this class
    })
  })

  it('checks responsive layout', () => {
    // Test mobile view
    cy.viewport('iphone-6')
    cy.get('[role="article"]').should('be.visible')
    
    // Test tablet view
    cy.viewport('ipad-2')
    cy.get('[role="article"]').should('be.visible')
    
    // Test desktop view
    cy.viewport(1920, 1080)
    cy.get('[role="article"]').should('be.visible')
  })
}) 