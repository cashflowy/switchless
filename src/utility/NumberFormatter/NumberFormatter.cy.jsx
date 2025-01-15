import React from 'react'
import NumberFormatter from './NumberFormatter'

describe('NumberFormatter Component', () => {
  describe('US Style Formatting', () => {
    it('formats thousands correctly', () => {
      cy.mount(<NumberFormatter value={1234} style="US" />)
      cy.contains('1.23 K').should('exist')

      cy.mount(<NumberFormatter value={5678.9} style="US" />)
      cy.contains('5.68 K').should('exist')
    })

    it('formats millions correctly', () => {
      cy.mount(<NumberFormatter value={1234567} style="US" />)
      cy.contains('1.23 M').should('exist')

      cy.mount(<NumberFormatter value={45678901} style="US" />)
      cy.contains('45.68 M').should('exist')
    })

    it('formats billions correctly', () => {
      cy.mount(<NumberFormatter value={1234567890} style="US" />)
      cy.contains('1.23 B').should('exist')
    })

    it('handles small numbers without suffix', () => {
      cy.mount(<NumberFormatter value={123} style="US" />)
      cy.contains('123').should('exist')

      cy.mount(<NumberFormatter value={123.456} style="US" />)
      cy.contains('123.46').should('exist')
    })
  })

  describe('Indian Style Formatting', () => {
    it('formats lakhs correctly', () => {
      cy.mount(<NumberFormatter value={123456} style="IN" />)
      cy.contains('1.23 L').should('exist')

      cy.mount(<NumberFormatter value={567890} style="IN" />)
      cy.contains('5.68 L').should('exist')
    })

    it('formats crores correctly', () => {
      cy.mount(<NumberFormatter value={12345678} style="IN" />)
      cy.contains('1.23 Cr').should('exist')

      cy.mount(<NumberFormatter value={456789012} style="IN" />)
      cy.contains('45.68 Cr').should('exist')
    })

    it('handles small numbers without suffix', () => {
      cy.mount(<NumberFormatter value={12345} style="IN" />)
      cy.contains('12.35 K').should('exist')
    })
  })

  describe('Precision Handling', () => {
    it('respects custom precision', () => {
      cy.mount(<NumberFormatter value={1234} style="US" precision={3} />)
      cy.contains('1.234 K').should('exist')

      cy.mount(<NumberFormatter value={1234567} style="US" precision={1} />)
      cy.contains('1.2 M').should('exist')
    })

    it('handles zero precision', () => {
      cy.mount(<NumberFormatter value={1234} style="US" precision={0} />)
      cy.contains('1 K').should('exist')
    })
  })

  describe('Edge Cases', () => {
    it('handles zero', () => {
      cy.mount(<NumberFormatter value={0} />)
      cy.contains('0').should('exist')
    })

    it('handles negative numbers', () => {
      cy.mount(<NumberFormatter value={-1234} style="US" />)
      cy.contains('-1.23 K').should('exist')

      cy.mount(<NumberFormatter value={-1234567} style="IN" />)
      cy.contains('-12.35 L').should('exist')
    })


    it('handles undefined style defaulting to US', () => {
      cy.mount(<NumberFormatter value={1234567} />)
      cy.contains('1.23 M').should('exist')
    })

    it('handles undefined precision defaulting to 2', () => {
      cy.mount(<NumberFormatter value={1234} />)
      cy.contains('1.23 K').should('exist')
    })
  })

  describe('Component Structure', () => {
    it('renders within span element', () => {
      cy.mount(<NumberFormatter value={1234} />)
      cy.get('span').should('exist')
        .and('contain', '1.23 K')
    })
  })
}) 