import React from 'react'
import TableOrCards from './TableOrCards'

describe('TableOrCards Component', () => {
  it('renders both buttons correctly', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="table"
        setViewAs={setViewAs}
      />
    )
    
    // Check if both buttons exist
    cy.get('button').should('have.length', 2)
    cy.get('button').first().should('have.text', 'Table')
    cy.get('button').last().should('have.text', 'Cards')
  })

  it('shows correct active state for table view', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="table"
        setViewAs={setViewAs}
      />
    )
    
    // Check if table button is selected
    cy.get('button').first().should('have.attr', 'aria-pressed', 'true')
    cy.get('button').last().should('have.attr', 'aria-pressed', 'false')
  })

  it('shows correct active state for cards view', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="cards"
        setViewAs={setViewAs}
      />
    )
    
    // Check if cards button is selected
    cy.get('button').first().should('have.attr', 'aria-pressed', 'false')
    cy.get('button').last().should('have.attr', 'aria-pressed', 'true')
  })

  it('handles view change correctly', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="table"
        setViewAs={setViewAs}
      />
    )
    
    // Click cards button and verify callback
    cy.get('button').last().click()
    cy.get('@setViewAsSpy').should('have.been.calledWith', 'cards')
  })

  it('does not call setViewAs when clicking already selected view', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="table"
        setViewAs={setViewAs}
      />
    )
    
    // Click already selected button
    cy.get('button').first().click()
    cy.get('@setViewAsSpy').should('not.have.been.called')
  })

  it('maintains button group structure', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs="table"
        setViewAs={setViewAs}
      />
    )
    
    // Check if buttons are properly grouped
    cy.get('.MuiToggleButtonGroup-root').should('exist')
      .within(() => {
        cy.get('button').should('have.length', 2)
      })
  })

  it('handles undefined viewAs prop gracefully', () => {
    const setViewAs = cy.spy().as('setViewAsSpy')
    cy.mount(
      <TableOrCards 
        viewAs={undefined}
        setViewAs={setViewAs}
      />
    )
    
    // Check that component renders without errors
    cy.get('.MuiToggleButtonGroup-root').should('exist')
    cy.contains('button', 'Table').should('not.have.class', 'Mui-selected')
    cy.contains('button', 'Cards').should('not.have.class', 'Mui-selected')
  })
}) 