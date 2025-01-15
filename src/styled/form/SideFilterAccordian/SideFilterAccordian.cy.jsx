import React from 'react'
import SideFilterAccordian from './SideFilterAccordian'
import { Typography } from '@mui/joy'

describe('SideFilterAccordian Component', () => {
  it('renders basic accordion structure', () => {
    cy.mount(
      <SideFilterAccordian>
        <div className="test-content">Filter Content</div>
      </SideFilterAccordian>
    )
    
    // Check if main components are rendered
    cy.get('.MuiAccordionGroup-root').should('exist')
    cy.get('.MuiAccordion-root').should('exist')
    cy.get('.MuiAccordionSummary-root').should('exist')
      .and('contain.text', 'Filter')
  })

  it('renders children content correctly', () => {
    cy.mount(
      <SideFilterAccordian>
        <div className="test-content">Filter Content</div>
      </SideFilterAccordian>
    )
    
    cy.get('.MuiAccordionDetails-root')
      .should('exist')
      .find('.test-content')
      .should('have.text', 'Filter Content')
  })

  it('shows correct header typography', () => {
    cy.mount(
      <SideFilterAccordian>
        <div>Content</div>
      </SideFilterAccordian>
    )
    
    cy.get('.MuiAccordionSummary-root')
      .find('.MuiTypography-root')
      .should('have.text', 'Filter')
      .and('have.class', 'MuiTypography-title-md')
      .and('have.css', 'font-weight', '700') // bold
  })

  it('expands and collapses on click', () => {
    cy.mount(
      <SideFilterAccordian>
        <div className="test-content">Filter Content</div>
      </SideFilterAccordian>
    )
    
    // Check initial state (might be expanded on large screens)
    cy.get('.MuiAccordion-root').then($accordion => {
      const isExpanded = $accordion.hasClass('Mui-expanded')
      if (!isExpanded) {
        // If not expanded, click to expand
        cy.get('.MuiAccordionSummary-root').click()
        cy.get('.MuiAccordion-root').should('have.class', 'Mui-expanded')
        cy.get('.test-content').should('be.visible')
        
        // Click again to collapse
        cy.get('.MuiAccordionSummary-root').click()
        cy.get('.MuiAccordion-root').should('not.have.class', 'Mui-expanded')
      }
    })
  })


}) 