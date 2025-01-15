import React from 'react'
import GsheetIframe from './GsheetIframe'

describe('GsheetIframe Component', () => {
  const testUrl = 'https://docs.google.com/spreadsheets/d/test-sheet-id/edit'

  it('renders iframe with correct props', () => {
    cy.mount(<GsheetIframe src={testUrl} />)

    cy.get('iframe')
      .should('have.attr', 'src', testUrl)
      .and('have.attr', 'sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms allow-downloads')
      .and('have.attr', 'loading', 'lazy')
      .and('have.attr', 'allowfullscreen')
  })

  it('displays "Google Sheet" text', () => {
    cy.mount(<GsheetIframe src={testUrl} />)

    cy.contains('Google Sheet').should('exist')
  })

  it('renders open in new tab button', () => {
    cy.mount(<GsheetIframe src={testUrl} />)

    cy.get('a[target="_blank"]')
      .should('have.attr', 'href', testUrl)
      .and('have.attr', 'rel', 'noopener noreferrer')
      
    // Check if icon exists
    cy.get('svg').should('exist')  // OpenInNewIcon
  })

  it.only('renders with empty src', () => {
    cy.mount(<GsheetIframe src="" />)

    // Should show "No link provided" message
    cy.contains('No link provided').should('exist')
    
    // Should not render iframe
    cy.get('iframe').should('not.exist')
    
    // Should not render open in new tab button
    cy.get('a[target="_blank"]').should('not.exist')
    
    // Should still maintain basic structure
    cy.get('.MuiCard-root').should('exist')
    cy.get('.MuiAspectRatio-root').should('exist')
  })

  it('maintains responsive layout', () => {
    cy.viewport('iphone-6') // Test on mobile viewport
    cy.mount(<GsheetIframe src={testUrl} />)

    // Card should be full width
    cy.get('.MuiCard-root')
      .should('have.css', 'width', '100%')

    // Check if aspect ratio is maintained
    cy.get('.MuiAspectRatio-root')
      .should('exist')
  })

  it('renders icon button with correct size', () => {
    cy.mount(<GsheetIframe src={testUrl} />)

    cy.get('.MuiIconButton-root')
      .should('have.attr', 'size', 'xs')
      
    cy.get('svg')  // OpenInNewIcon
      .should('have.css', 'font-size', '16px')  // 1rem = 16px
  })

  it('maintains card overflow settings', () => {
    cy.mount(<GsheetIframe src={testUrl} />)

    // First CardOverflow should have no padding bottom
    cy.get('.MuiCardOverflow-root').first()
      .should('have.css', 'padding-bottom', '0px')

    // Second CardOverflow should have soft variant
    cy.get('.MuiCardOverflow-root').last()
      .should('have.class', 'MuiCardOverflow-variantSoft')
  })
}) 