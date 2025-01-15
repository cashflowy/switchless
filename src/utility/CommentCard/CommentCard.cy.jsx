import React from 'react'
import CommentCard from './CommentCard'

describe('CommentCard Component', () => {
  const sampleComments = [
    {
      username: 'John Doe',
      content: 'This is a test comment',
      createdAt: '2024-01-01T12:00:00Z'
    },
    {
      username: 'Jane Smith',
      content: 'Another test comment with longer text that might wrap to multiple lines',
      createdAt: '2024-01-02T14:30:00Z'
    }
  ]

  it('renders comments correctly', () => {
    cy.mount(<CommentCard comments={sampleComments} submit={() => {}} />)

    // Check if all comments are rendered
    cy.contains('John Doe').should('exist')
    cy.contains('This is a test comment').should('exist')
    cy.contains('Jane Smith').should('exist')
    
    // Check date formatting - using partial text match
    cy.contains(/Jan 01/).should('exist')
    cy.contains(/Jan 02/).should('exist')

    // Alternative approach: Check for Typography components
    cy.get('.MuiTypography-root').should('have.length.at.least', 4) // username, date, content for each comment
  })

  it('renders comment form correctly', () => {
    cy.mount(<CommentCard comments={[]} submit={() => {}} />)

    // Check form elements
    cy.get('form').should('exist')
    cy.get('textarea[name="content"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
      .and('contain', 'Add comment')
      .find('svg').should('exist') // Check for icon
  })

  it('handles form submission', () => {
    const submitSpy = cy.spy().as('submitSpy')
    cy.mount(<CommentCard comments={[]} submit={submitSpy} />)

    // Fill and submit form
    cy.get('textarea[name="content"]')
      .type('New test comment')
    cy.get('form').submit()

    // Check if submit was called
    cy.get('@submitSpy').should('have.been.called')
  })

  it('handles empty comments array', () => {
    cy.mount(<CommentCard comments={[]} submit={() => {}} />)

    // Should still render the container and form
    cy.contains('Comments:').should('exist')
    cy.get('form').should('exist')
    cy.get('.MuiCard-root').should('exist')
  })

  it('validates required comment field', () => {
    cy.mount(<CommentCard comments={[]} submit={() => {}} />)

    // Try to submit empty form
    cy.get('form').submit()
    
    // Check if HTML5 validation prevents submission
    cy.get('textarea[name="content"]')
      .should('have.attr', 'required')
  })

  it('handles long comment text correctly', () => {
    const longComment = {
      username: 'User',
      content: 'A'.repeat(200), // Very long comment
      createdAt: new Date().toISOString()
    }

    cy.mount(<CommentCard comments={[longComment]} submit={() => {}} />)

    // Check if text wraps properly
    cy.contains('A'.repeat(200))
      .should('have.css', 'word-wrap', 'break-word')
  })

  it('renders username and timestamp on same line', () => {
    cy.mount(<CommentCard comments={sampleComments} submit={() => {}} />)

    // Check if username and date are on the same line
    cy.contains('John Doe').parent()
      .find('span')  // or whatever wraps the date
      .should('have.css', 'display', 'inline')
      .and('have.css', 'white-space', 'nowrap')
  })

}) 