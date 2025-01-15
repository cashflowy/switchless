import React from 'react'
import LoomIframe from './LoomIframe'

describe('LoomIframe Component', () => {
  const testUrl = 'https://www.loom.com/share/abc123xyz'
  const expectedEmbedUrl = 'https://www.loom.com/embed/abc123xyz?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true'

  it('renders iframe with src', () => {
    cy.mount(<LoomIframe src={testUrl} />)

    cy.get('iframe')
      .should('have.attr', 'src', expectedEmbedUrl)

  })


  it('displays "Loom Video" text', () => {
    cy.mount(<LoomIframe src={testUrl} />)

    cy.contains('Loom Video').should('exist')
  })

  it('renders open in new tab button', () => {
    cy.mount(<LoomIframe src={testUrl} />)

    cy.get('a[target="_blank"]')
      .should('have.attr', 'href', testUrl)
      .and('have.attr', 'rel', 'noopener noreferrer')
      
    // Check if icon exists
    cy.get('svg').should('exist')  // OpenInNewIcon
  })


  it('renders icon button with correct size', () => {
    cy.mount(<LoomIframe src={testUrl} />)

    // Using more specific selector
    cy.get('.MuiIconButton-sizeXs')
      .should('exist')
      
    // Check icon size
    cy.get('.MuiIconButton-sizeXs svg')
      .should('exist')
      .should('have.css', 'font-size', '16px')
  })

  it('maintains card overflow settings', () => {
    cy.mount(<LoomIframe src={testUrl} />)

    // First CardOverflow should have no padding bottom
    cy.get('.MuiCardOverflow-root').first()
      .should('have.css', 'padding-bottom', '0px')

    // Second CardOverflow should have soft variant
    cy.get('.MuiCardOverflow-root').last()
      .should('have.class', 'MuiCardOverflow-variantSoft')
  })

  it('handles invalid URLs gracefully', () => {
    const invalidUrls = [
      'https://invalid.com/video',
      'not-a-url',
      'https://loom.com/invalid/path'
    ]

    invalidUrls.forEach(url => {
      cy.mount(<LoomIframe src={url} />)
      // Should still render but might show error message
      cy.get('.MuiCard-root').should('exist')
    })
  })
}) 