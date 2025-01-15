import React from 'react'
import CurrencyFormatter from './CurrencyFormatter'

describe('CurrencyFormatter', () => {
  // INR Tests
  describe('INR Currency', () => {
    it('formats INR values in Crores correctly', () => {
      cy.mount(<CurrencyFormatter currency="INR" value={10000000} />)
      cy.get('span').should('have.text', 'INR 1.00 Cr')
      
      cy.mount(<CurrencyFormatter currency="INR" value={25000000} />)
      cy.get('span').should('have.text', 'INR 2.50 Cr')
    })

    it('formats INR values in Lakhs correctly', () => {
      cy.mount(<CurrencyFormatter currency="INR" value={500000} />)
      cy.get('span').should('have.text', 'INR 5.00 L')
      
      cy.mount(<CurrencyFormatter currency="INR" value={150000} />)
      cy.get('span').should('have.text', 'INR 1.50 L')
    })

    it('formats small INR values correctly', () => {
      cy.mount(<CurrencyFormatter currency="INR" value={1000} />)
      cy.get('span').should('have.text', '₹1,000.00')
    })
  })

  // USD Tests
  describe('USD Currency', () => {
    it('formats USD values in Millions correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={2000000} />)
      cy.get('span').should('have.text', 'USD 2.00 M')
      
      cy.mount(<CurrencyFormatter currency="USD" value={5500000} />)
      cy.get('span').should('have.text', 'USD 5.50 M')
    })

    it('formats USD values in Thousands correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={5000} />)
      cy.get('span').should('have.text', 'USD 5.00 K')
      
      cy.mount(<CurrencyFormatter currency="USD" value={2500} />)
      cy.get('span').should('have.text', 'USD 2.50 K')
    })

    it('formats small USD values correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={500} />)
      cy.get('span').should('have.text', '$500.00')
    })
  })

  // Edge Cases
  describe('Edge Cases', () => {
    it('handles zero values correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={0} />)
      cy.get('span').should('have.text', '$0.00')

      cy.mount(<CurrencyFormatter currency="INR" value={0} />)
      cy.get('span').should('have.text', '₹0.00')
    })

    it('handles decimal values correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={99.99} />)
      cy.get('span').should('have.text', '$99.99')

      cy.mount(<CurrencyFormatter currency="INR" value={99.99} />)
      cy.get('span').should('have.text', '₹99.99')
    })

    it('handles very large numbers correctly', () => {
      cy.mount(<CurrencyFormatter currency="USD" value={1000000000} />)
      cy.get('span').should('have.text', 'USD 1000.00 M')

      cy.mount(<CurrencyFormatter currency="INR" value={1000000000} />)
      cy.get('span').should('have.text', 'INR 100.00 Cr')
    })
  })
})
