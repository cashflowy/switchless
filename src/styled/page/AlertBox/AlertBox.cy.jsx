import React from 'react'
import AlertBox from './AlertBox'

describe('AlertBox Component', () => {
  it('renders with single message correctly', () => {
    cy.mount(
      <AlertBox 
        title="Test Title"
        message="Test Message"
      />
    )
    
    // Check title and message
    cy.get('.MuiTypography-root').first().contains('Test Title')
    cy.get('.MuiTypography-root').last().contains('Test Message')
    
    // Check default color and icon
    cy.get('.MuiAlert-colorWarning').should('exist')
    cy.get('.MuiAlert-root').find('svg').should('exist')
  })

  it('renders with array of messages as list', () => {
    const messages = ['Message 1', 'Message 2', 'Message 3']
    cy.mount(
      <AlertBox 
        title="List Title"
        message={messages}
      />
    )
    
    // Check title
    cy.get('.MuiTypography-root').first().contains('List Title')
    
    // Check list items
    cy.get('.MuiList-root').within(() => {
      cy.get('li').should('have.length', 3)
      messages.forEach(msg => {
        cy.contains('li', msg).should('exist')
      })
    })
  })

  it('handles icon prop correctly', () => {
    // Test with icon=false
    cy.mount(
      <AlertBox 
        title="No Icon"
        message="Test"
        icon={false}
      />
    )
    
    cy.get('.MuiAlert-startDecorator').should('not.exist')
  })

  it('handles different colors correctly', () => {
    const colors = ['warning', 'success', 'danger', 'primary', 'neutral']
    
    colors.forEach(color => {
      cy.mount(
        <AlertBox 
          title="Color Test"
          message="Test Message"
          color={color}
        />
      )
      
      // Check for the color class
      cy.get('.MuiAlert-root').should('have.class', `MuiAlert-color${color.charAt(0).toUpperCase() + color.slice(1)}`)
    })
  })

  it('handles long content gracefully', () => {
    const longTitle = 'This is a very long title that should still be handled properly by the component'
    const longMessage = 'This is a very long message that should be properly wrapped and displayed correctly within the alert box without breaking the layout or causing any visual issues'
    
    cy.mount(
      <AlertBox 
        title={longTitle}
        message={longMessage}
      />
    )
    
    cy.get('.MuiTypography-title-lg').contains(longTitle)
    cy.get('.MuiTypography-body-md').contains(longMessage)
  })

  it('handles empty title or message gracefully', () => {
    cy.mount(
      <AlertBox 
        title=""
        message="Only Message"
      />
    )
    
    // Check empty title and message using MuiTypography-root
    cy.get('.MuiTypography-root').first().should('be.empty')
    cy.get('.MuiTypography-root').last().contains('Only Message')

    // Also test with empty message
    cy.mount(
      <AlertBox 
        title="Only Title"
        message=""
      />
    )

    cy.get('.MuiTypography-root').first().contains('Only Title')
    cy.get('.MuiTypography-root').last().should('be.empty')
  })
}) 