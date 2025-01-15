import React from 'react'
import StatsBarContainer from './StatsBarContainer'

describe('StatsBarContainer Component', () => {
  it('renders metrics correctly', () => {
    const items = [
      { type: 'metric', label: 'Revenue', value: 1000000 },
      { type: 'metric', label: 'Expenses', value: 500000 }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check if metrics are rendered
    cy.contains('Revenue').should('exist')
    cy.contains('10,00,000').should('exist')
    cy.contains('Expenses').should('exist')
    cy.contains('5,00,000').should('exist')
  })

  it('renders dividers correctly', () => {
    const items = [
      { type: 'metric', label: 'Revenue', value: 1000 },
      { type: 'divider' },
      { type: 'metric', label: 'Expenses', value: 500 }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check if divider exists
    cy.get('.MuiDivider-vertical').should('exist')
  })

  it('applies correct color based on value', () => {
    const items = [
      { type: 'metric', label: 'Positive', value: 100 },
      { type: 'metric', label: 'Zero', value: 0 },
      { type: 'metric', label: 'Negative', value: -100 }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check color assignments by finding the Typography components containing the values
    cy.contains('div', 'Positive')
      .find('p:last-child') // or Typography component
      .should('have.class', 'MuiTypography-colorSuccess')

    cy.contains('div', 'Zero')
      .find('p:last-child')
      .should('have.class', 'MuiTypography-colorNeutral')

    cy.contains('div', 'Negative')
      .find('p:last-child')
      .should('have.class', 'MuiTypography-colorWarning')
  })

  it('handles custom colors', () => {
    const items = [
      { type: 'metric', label: 'Custom', value: 100, color: 'primary' }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    cy.contains('100').should('have.class', 'MuiTypography-colorPrimary')
  })

  it('formats numbers correctly', () => {
    const items = [
      { type: 'metric', label: 'Integer', value: 1234567 },
      { type: 'metric', label: 'Decimal', value: 1234567.89 },
      { type: 'metric', label: 'String Number', value: "1234567" },
      { type: 'metric', label: 'Text', value: "N/A" }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check number formatting
    cy.contains('12,34,567').should('exist')
    cy.contains('12,34,568').should('exist') // rounded
    cy.contains('12,34,567').should('exist')
    cy.contains('N/A').should('exist')
  })

  it('renders children correctly', () => {
    const items = [
      { type: 'metric', label: 'Revenue', value: 1000 }
    ]

    cy.mount(
      <StatsBarContainer items={items}>
        <div data-testid="child-content">Extra Content</div>
      </StatsBarContainer>
    )

    cy.get('[data-testid="child-content"]').should('exist')
    cy.contains('Extra Content').should('exist')
  })

  it('handles empty items array', () => {
    cy.mount(<StatsBarContainer items={[]} />)

    // Should render container without errors
    cy.get('.MuiCard-root').should('exist')
    cy.get('.MuiStack-root').should('exist')
  })

  it('truncates long labels', () => {
    const items = [
      { type: 'metric', label: 'This is a very long label that should be truncated', value: 1000 }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check if label is truncated
    cy.contains('This is a very long label')
      .should('have.css', 'text-overflow', 'ellipsis')
      .and('have.css', 'max-width', '100px')
  })

  it('maintains horizontal scroll functionality', () => {
    // Create many items to force scrolling
    const items = Array.from({ length: 10 }, (_, i) => ({
      type: 'metric',
      label: `Metric ${i}`,
      value: i * 1000
    }))

    cy.mount(<StatsBarContainer items={items} />)

    // Check if container has overflow
    cy.get('.MuiStack-root')
      .should('have.css', 'overflow-x', 'auto')
      .should('have.css', 'justify-content', 'space-evenly')
      
    // Note: Some scrollbar-related styles might not be directly testable
    // as they are pseudo-elements or vendor-specific
  })

  it('handles mixed content types', () => {
    const items = [
      { type: 'metric', label: 'Start', value: 100 },
      { type: 'divider' },
      { type: 'metric', label: 'Middle', value: 200 },
      { type: 'divider' },
      { type: 'metric', label: 'End', value: 300 }
    ]

    cy.mount(<StatsBarContainer items={items} />)

    // Check alternating pattern
    cy.get('.MuiDivider-vertical').should('have.length', 2)
    cy.contains('Start').should('exist')
    cy.contains('Middle').should('exist')
    cy.contains('End').should('exist')
  })
}) 