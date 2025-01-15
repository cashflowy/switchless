import React from 'react'
import FormField from './FormField'
import { Typography } from '@mui/joy'

describe('FormField Component', () => {
  it('renders with default width (full)', () => {
    cy.mount(
      <FormField label="Test Label">
        <Typography>Test Content</Typography>
      </FormField>
    )
    
    cy.get('.MuiGrid-root').should('have.class', 'MuiGrid-grid-xs-12')
    cy.get('.MuiFormLabel-root').should('have.text', 'Test Label')
    cy.get('.MuiTypography-root').should('have.text', 'Test Content')
  })

  it('renders with half width', () => {
    cy.mount(
      <FormField label="Half Width" width="half">
        <Typography>Content</Typography>
      </FormField>
    )
    
    cy.get('.MuiGrid-root').should('have.class', 'MuiGrid-grid-xs-6')
  })

  it('renders with third width', () => {
    cy.mount(
      <FormField label="Third Width" width="third">
        <Typography>Content</Typography>
      </FormField>
    )
    
    cy.get('.MuiGrid-root').should('have.class', 'MuiGrid-grid-xs-4')
  })

  it('hides component when show is false', () => {
    cy.mount(
      <FormField label="Hidden Field" show={false}>
        <Typography>Should Not Show</Typography>
      </FormField>
    )
    
    cy.get('.MuiFormControl-root').should('not.exist')
    cy.get('Typography').should('not.exist')
  })

  it('shows component when show is true', () => {
    cy.mount(
      <FormField label="Visible Field" show={true}>
        <Typography>Should Show</Typography>
      </FormField>
    )
    
    cy.get('.MuiFormControl-root').should('exist')
    cy.get('.MuiTypography-root').should('be.visible')
  })

  it('renders label correctly', () => {
    const testLabel = 'Test Label Text'
    cy.mount(
      <FormField label={testLabel}>
        <Typography>Content</Typography>
      </FormField>
    )
    
    cy.get('.MuiFormLabel-root')
      .should('have.text', testLabel)
  })

  it('renders children content correctly', () => {
    cy.mount(
      <FormField label="Parent">
        <Typography>Child Content</Typography>
      </FormField>
    )
    
    // Check if the Typography component is rendered with correct text
    cy.get('.MuiTypography-root').should('exist')
      .and('have.text', 'Child Content')
  })

}) 