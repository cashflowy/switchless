import React from 'react'
import ClickToEdit from './ClickToEdit'

describe('ClickToEdit Component', () => {
  const defaultText = 'Default Text'
  const newText = 'New Text'

  it('renders initial text correctly', () => {
    cy.mount(
      <ClickToEdit onSave={cy.spy().as('onSaveSpy')}>
        {defaultText}
      </ClickToEdit>
    )

    cy.contains(defaultText).should('be.visible')
    cy.get('.edit-icon').should('exist').and('not.be.visible')
  })


  it('switches to edit mode on click', () => {
    cy.mount(
      <ClickToEdit onSave={cy.spy().as('onSaveSpy')}>
        {defaultText}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input').should('be.visible')
      .and('have.value', defaultText)
      .and('have.focus')
  })

  it('handles text input correctly', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {defaultText}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input')
      .clear()
      .type(newText)
      .should('have.value', newText)
  })

  it('saves on Enter key press', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {defaultText}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input')
      .clear()
      .type(`${newText}{enter}`)

    cy.get('@onSaveSpy').should('have.been.calledWith', newText)
    cy.contains(newText).should('be.visible')
  })

  it('saves on blur', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {defaultText}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input')
      .clear()
      .type(newText)
      .blur()

    cy.get('@onSaveSpy').should('have.been.calledWith', newText)
    cy.contains(newText).should('be.visible')
  })

  it('updates when children prop changes', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {defaultText}
      </ClickToEdit>
    )

    // Verify initial text
    cy.contains(defaultText).should('be.visible')

    // Remount with new text
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {newText}
      </ClickToEdit>
    )

    // Verify text updated
    cy.contains(newText).should('be.visible')
  })

  it('handles empty text gracefully', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {''}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input').should('have.value', '')
  })

  it('selects all text when entering edit mode', () => {
    cy.mount(
      <ClickToEdit onSave={cy.spy().as('onSaveSpy')}>
        {defaultText}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    
    // Check if text is selected
    cy.get('input').should(($input) => {
      const input = $input[0]
      expect(input.selectionStart).to.equal(0)
      expect(input.selectionEnd).to.equal(defaultText.length)
    })
  })

  it('preserves whitespace in text', () => {
    const textWithSpaces = '  Padded Text  '
    cy.mount(
      <ClickToEdit onSave={cy.spy().as('onSaveSpy')}>
        {textWithSpaces}
      </ClickToEdit>
    )

    cy.get('.MuiLink-root').click()
    cy.get('input').should('have.value', textWithSpaces)
  })

  it('handles rapid editing correctly', () => {
    const onSave = cy.spy().as('onSaveSpy')
    cy.mount(
      <ClickToEdit onSave={onSave}>
        {defaultText}
      </ClickToEdit>
    )

    // Multiple quick edits
    cy.get('.MuiLink-root').click()
    cy.get('input').clear().type('Text 1{enter}')
    cy.get('.MuiLink-root').click()
    cy.get('input').clear().type('Text 2{enter}')

    // Check last save
    cy.get('@onSaveSpy').should('have.been.calledWith', 'Text 2')
  })

  it('has edit icon with correct initial state', () => {
    cy.mount(
      <ClickToEdit onSave={cy.spy().as('onSaveSpy')}>
        {defaultText}
      </ClickToEdit>
    )

    // Verify icon exists and has correct initial styling
    cy.get('.edit-icon')
      .should('exist')
      .and('have.css', 'visibility', 'hidden')
      .and('have.css', 'opacity', '0')
      .and('have.css', 'transition')  // Verify transition property exists
  })


}) 