import React from 'react'
import DisplayDate from './Date'

describe('DisplayDate Component', () => {
  it('renders date string correctly', () => {
    const testDate = '2024-03-14T10:30:00Z'
    cy.mount(<DisplayDate d={testDate} />)
    
    cy.get('span').should('have.text', '2024-03-14')
  })

  it('handles different date formats but still shows YYYY-MM-DD', () => {
    const testDates = [
      '2024-03-14T10:30:00.000Z',
      '2024-03-14T10:30:00',
      '2024-03-14 10:30:00',
      '2024-03-14'
    ]

    testDates.forEach(date => {
      cy.mount(<DisplayDate d={date} />)
      cy.get('span').should('have.text', '2024-03-14')
    })
  })

  it('truncates longer date strings to 10 characters', () => {
    const longDateString = '2024-03-14T10:30:00.000Z'
    cy.mount(<DisplayDate d={longDateString} />)
    
    // Should only show YYYY-MM-DD part
    cy.get('span')
      .should('have.text', '2024-03-14')
      .and('not.contain', 'T10:30:00')
  })

  it('preserves date string if less than 10 characters', () => {
    const shortDateString = '2024-03'
    cy.mount(<DisplayDate d={shortDateString} />)
    
    cy.get('span').should('have.text', '2024-03')
  })
}) 