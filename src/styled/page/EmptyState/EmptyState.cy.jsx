import React from 'react'
import EmptyState from './EmptyState'

describe('EmptyState Component', () => {
  it('renders with default props correctly', () => {
    cy.mount(<EmptyState />)

    // Check if default text is rendered
    cy.contains("You haven't added any Jobs").should('exist')
    cy.contains('button', 'Add Job').should('exist')

    // Check if icon is rendered
    cy.get('svg').should('exist')
  })

  it('renders custom description correctly', () => {
    const customDescription = 'Custom empty state message'
    cy.mount(
      <EmptyState 
        description={customDescription}
      />
    )

    cy.contains(customDescription).should('exist')
  })

  it('renders custom button text correctly', () => {
    const customButtonText = 'Custom Button'
    cy.mount(
      <EmptyState 
        buttonText={customButtonText}
      />
    )

    cy.contains('button', customButtonText).should('exist')
  })

  it('handles button click correctly', () => {
    const onButtonClick = cy.spy().as('onButtonClickSpy')
    cy.mount(
      <EmptyState 
        onButtonClick={onButtonClick}
      />
    )

    cy.get('button').click()
    cy.get('@onButtonClickSpy').should('have.been.called')
  })

  it('applies correct styling', () => {
    cy.mount(<EmptyState />)

    // Check container styling
    cy.get('.MuiBox-root')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'min-height', '200px')

    // Check icon styling
    cy.get('svg')
      .should('have.css', 'font-size', '48px') // 3rem = 48px
      .and('have.css', 'margin-bottom', '8px') // mb: 1 = 8px

    // Check button styling
    cy.get('button')
      .should('have.class', 'MuiButton-colorPrimary')
      .and('have.class', 'MuiButton-variantSoft')
  })

  it('renders button with plus sign decorator', () => {
    cy.mount(<EmptyState />)

    cy.get('button')
      .find('span')
      .first()
      .should('have.text', '+')
  })

  it('maintains layout on different screen sizes', () => {
    cy.mount(<EmptyState />)

    // Test on desktop
    cy.viewport(1024, 768)
    cy.get('.MuiBox-root')
      .should('have.css', 'min-height', '200px')

    // Test on mobile
    cy.viewport('iphone-6')
    cy.get('.MuiBox-root')
      .should('have.css', 'min-height', '200px')
  })

  it('handles long text content gracefully', () => {
    const longDescription = 'This is a very long description that should still be displayed properly without breaking the layout of the empty state component'
    const longButtonText = 'This is a very long button text that should be handled properly'
    
    cy.mount(
      <EmptyState 
        description={longDescription}
        buttonText={longButtonText}
      />
    )

    cy.contains(longDescription).should('exist')
    cy.contains('button', longButtonText).should('exist')
    
    // Check if container maintains its structure
    cy.get('.MuiBox-root')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
  })

  it('handles empty strings gracefully', () => {
    cy.mount(
      <EmptyState 
        description=""
        buttonText=""
      />
    )

    // Component should still render without errors
    cy.get('.MuiBox-root').should('exist')
    cy.get('button').should('exist')
  })
}) 