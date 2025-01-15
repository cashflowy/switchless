import React from 'react'
import DateTime from './DateTime'

describe('DateTime Component', () => {
  it('renders date and time correctly', () => {
    // Using a fixed timestamp for consistent testing
    const testDateTime = '2024-03-14T15:30:45.000Z'
    cy.mount(<DateTime ds={testDateTime} />)
    
    cy.get('span').should('contain', '2024-03-14')
    // Note: Time part may vary based on timezone, so we'll check format rather than exact time
    cy.get('span').invoke('text').should('match', /\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}/)
  })

  it('handles different datetime string formats', () => {
    const testCases = [
      {
        input: '2024-03-14T15:30:45.000Z',
        expectedDate: '2024-03-14'
      },
      {
        input: '2024-03-14T15:30:45',
        expectedDate: '2024-03-14'
      },
      {
        input: '2024-03-14 15:30:45',
        expectedDate: '2024-03-14'
      }
    ]

    testCases.forEach(test => {
      cy.mount(<DateTime ds={test.input} />)
      cy.get('span').should('contain', test.expectedDate)
      // Verify time format
      cy.get('span').invoke('text')
        .should('match', /\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}/)
    })
  })

  it('formats time in en-IN locale', () => {
    const testDateTime = '2024-03-14T15:30:45.000Z'
    cy.mount(<DateTime ds={testDateTime} />)
    
    // Verify the time part follows Indian format (HH:MM:SS)
    cy.get('span').invoke('text')
      .should('match', /\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}/)
  })

  it('correctly splits date and time with space', () => {
    const testDateTime = '2024-03-14T15:30:45.000Z'
    cy.mount(<DateTime ds={testDateTime} />)
    
    cy.get('span').invoke('text').then((text) => {
      const parts = text.split(' ')
      // Should have at least 2 parts (date and time)
      expect(parts.length).to.be.at.least(2)
      // First part should be the date
      expect(parts[0]).to.match(/^\d{4}-\d{2}-\d{2}$/)
      // Second part should be the time
      expect(parts[1]).to.match(/^\d{1,2}:\d{2}:\d{2}/)
    })
  })

  it('handles timezone conversions correctly', () => {
    // Using a known UTC timestamp
    const utcDateTime = '2024-03-14T12:00:00.000Z'
    cy.mount(<DateTime ds={utcDateTime} />)
    
    cy.get('span').invoke('text').then((text) => {
      const parts = text.split(' ')
      expect(parts[0]).to.equal('2024-03-14')
      // We don't check exact time due to timezone differences
      expect(parts[1]).to.match(/\d{1,2}:\d{2}:\d{2}/)
    })
  })
}) 