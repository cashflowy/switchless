import React from 'react'
import TextField from './TextField'

describe('TextField Component', () => {
  it('renders basic text input correctly', () => {
    cy.mount(<TextField 
      label="Name"
      name="name"
      placeholder="Enter your name"
    />)
    
    cy.get('label').should('contain', 'Name')
    cy.get('input').should('have.attr', 'placeholder', 'Enter your name')
    cy.get('input').should('have.attr', 'name', 'name')
  })

  it('handles required field correctly', () => {
    cy.mount(<TextField 
      label="Required Field"
      required={true}
    />)
    
    cy.get('input').should('have.attr', 'required')
  })

  it('handles number type with right alignment', () => {
    cy.mount(<TextField 
      type="number"
      label="Amount"
      name="amount"
    />)
    
    cy.get('input')
      .should('have.attr', 'type', 'number')
      .parent()
      .should('have.css', 'text-align', 'right')
  })

  it('handles disabled state correctly', () => {
    cy.mount(<TextField 
      label="Disabled Field"
      disabled={true}
    />)
    
    cy.get('input').should('be.disabled')
  })

  it('handles decorators correctly', () => {
    cy.mount(<TextField 
      label="Currency"
      startDecorator="$"
      endDecorator=".00"
    />)
    
    cy.contains('$').should('be.visible')
    cy.contains('.00').should('be.visible')
  })

  it('handles default value correctly', () => {
    const defaultValue = 'Test Value'
    cy.mount(<TextField 
      label="With Default"
      defaultValue={defaultValue}
    />)
    
    cy.get('input').should('have.value', defaultValue)
  })

  it('handles blur event correctly', () => {
    const onBlurSpy = cy.spy().as('onBlurSpy')
    cy.mount(<TextField 
      label="Blur Test"
      onBlur={onBlurSpy}
    />)
    
    cy.get('input')
      .focus()
      .blur()
    cy.get('@onBlurSpy').should('have.been.called')
  })

  it('handles hidden state correctly', () => {
    cy.mount(<TextField 
      label="Hidden Field"
      hidden={true}
    />)
    
    cy.get('input')
      .parent()
      .parent()
      .should('have.attr', 'hidden')
  })
}) 