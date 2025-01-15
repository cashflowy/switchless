import React from 'react'
import MetricCard from './MetricCard'

describe('MetricCard Component', () => {
  it('renders basic metric card correctly', () => {
    cy.mount(
      <MetricCard
        title="Revenue"
        value={1000}
        previousValue={800}
      />
    )

    cy.contains('Revenue').should('exist')
    cy.contains('$1K').should('exist')
    cy.contains('from $800').should('exist')
    cy.contains('25.00%').should('exist')
  })

  it('handles currency formatting for different ranges', () => {
    const testCases = [
      { value: 1234, expected: '$1.23K' },
      { value: 1200000, expected: '$1.2M' },
      { value: 1500000000, expected: '$1.5B' }
    ]

    testCases.forEach(({ value, expected }) => {
      cy.mount(
        <MetricCard
          title="Test"
          value={value}
          previousValue={value / 2}
        />
      )
      cy.contains(expected).should('exist')
    })
  })

  it('handles INR currency formatting correctly', () => {
    const testCases = [
      { value: 100000, expected: '₹1 L' },      // 1 Lakh
      { value: 10000000, expected: '₹1 Cr' },   // 1 Crore
    ]

    testCases.forEach(({ value, expected }) => {
      cy.mount(
        <MetricCard
          title="Test"
          value={value}
          previousValue={value / 2}
          currency="INR"
          locale="en-IN"
        />
      )
      cy.contains(expected).should('exist')
    })
  })

  it('shows correct color coding for value changes', () => {
    // Positive change
    cy.mount(
      <MetricCard
        title="Growth"
        value={1200}
        previousValue={1000}
      />
    )
    cy.get('.MuiChip-colorSuccess').should('exist')
    cy.get('[data-testid="NorthEastIcon"]').should('exist')

    // Negative change
    cy.mount(
      <MetricCard
        title="Decline"
        value={800}
        previousValue={1000}
      />
    )
    cy.get('.MuiChip-colorDanger').should('exist')
    cy.get('[data-testid="SouthEastIcon"]').should('exist')

    // No change
    cy.mount(
      <MetricCard
        title="Stable"
        value={1000}
        previousValue={1000}
      />
    )
    cy.get('.MuiChip-colorNeutral').should('exist')
    cy.get('[data-testid="RemoveIcon"]').should('exist')
  })

  it('handles zero previous value correctly', () => {
    cy.mount(
      <MetricCard
        title="New Metric"
        value={1000}
        previousValue={0}
      />
    )

    cy.contains('0%').should('exist')
    cy.get('.MuiChip-colorNeutral').should('exist')
  })

  it('formats percentage changes correctly', () => {
    const testCases = [
      { current: 150, previous: 100, expected: '50.00%' },
      { current: 50, previous: 100, expected: '-50.00%' },
      { current: 100, previous: 100, expected: '0%' }
    ]

    testCases.forEach(({ current, previous, expected }) => {
      cy.mount(
        <MetricCard
          title="Test"
          value={current}
          previousValue={previous}
        />
      )
      cy.contains(expected).should('exist')
    })
  })

  it('handles different locales correctly', () => {
    cy.mount(
      <MetricCard
        title="European Format"
        value={1234567.89}
        previousValue={1000000}
        currency="EUR"
        locale="de-DE"
      />
    )

    // Check if European number format is used
    cy.contains('€').should('exist')
  })

  it('maintains layout structure', () => {
    cy.mount(
      <MetricCard
        title="Layout Test"
        value={1000}
        previousValue={800}
      />
    )

    // Check component structure
    cy.get('.MuiCard-root').within(() => {
      cy.get('.MuiCardContent-root').should('exist')
      cy.get('.MuiTypography-body-sm').should('exist')  // title
      cy.get('.MuiTypography-h2').should('exist')       // main value
      cy.get('.MuiTypography-body-xs').should('exist')  // previous value
      cy.get('.MuiChip-root').should('exist')          // percentage chip
    })
  })

  it('trims unnecessary decimal places', () => {
    cy.mount(
      <MetricCard
        title="Precision Test"
        value={1000.00}
        previousValue={900.00}
      />
    )

    // Should show "$1K" instead of "$1.00K"
    cy.contains('$1K').should('exist')
  })

  it('handles very large numbers', () => {
    cy.mount(
      <MetricCard
        title="Large Number"
        value={1000000000000}  // 1 trillion
        previousValue={900000000000}
      />
    )

    cy.contains('$1T').should('exist')
  })
}) 