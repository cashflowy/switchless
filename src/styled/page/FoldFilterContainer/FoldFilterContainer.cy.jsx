import React from 'react'
import FoldFilterContainer from './FoldFilterContainer'

describe('FoldFilterContainer Component', () => {
  const mockColumnOne = <div data-testid="column-one">Filter Content</div>
  const mockColumnTwo = <div data-testid="column-two">Main Content</div>
  const mockSearchParams = { filter: 'active' }

  it('renders both columns correctly', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Check if both columns are rendered
    cy.get('[data-testid="column-one"]').should('exist')
    cy.get('[data-testid="column-two"]').should('exist')
  })

  it('handles collapse/expand functionality', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Check initial expanded state (333px on desktop)
    cy.viewport(1024, 768)
    cy.get('.MuiBox-root').first()
      .should('have.css', 'width', '333px')

    // Click collapse button
    cy.get('button').click()

    // Check collapsed state (36px)
    cy.get('.MuiBox-root').first()
      .should('have.css', 'width', '36px')

    // Click expand button
    cy.get('button').click()

    // Check expanded state again
    cy.get('.MuiBox-root').first()
      .should('have.css', 'width', '333px')
  })

  it('shows vertical filter text when collapsed', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Set viewport to desktop size
    cy.viewport(1024, 768)

    // Click collapse button
    cy.get('.MuiIconButton-root').click({ force: true })

    // Wait for the collapse animation by checking the width
    cy.get('.MuiBox-root').first()
      .should('have.css', 'width', '36px')
      .within(() => {
        cy.get('p')  // or whatever tag your Typography uses
          .should('contain', 'Filter')
          .and('have.css', 'writing-mode', 'vertical-rl')
          .and('have.css', 'transform', 'matrix(-1, 0, 0, -1, 0, 0)')  // This is equivalent to rotate(180deg)
      })
  })

  it('shows "(Applied)" text when searchParams are present', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={mockSearchParams}
      />
    )

    // Collapse the filter
    cy.get('button').click()

    // Check for "(Applied)" text when collapsed
    cy.contains('Filter (Applied)').should('exist')
  })

  it.only('is responsive on mobile screens', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Test on mobile
    cy.viewport('iphone-6')

    // Check if layout is vertical
    cy.get('.MuiStack-root')
      .should('have.css', 'flex-direction', 'column')

    // Check if collapse button is hidden on mobile
    cy.get('.MuiIconButton-root').should('not.be.visible')

    // Check if filter takes full width
    cy.get('.MuiBox-root').first()
      .should(($el) => {
        const width = $el.width()
        const parentWidth = $el.parent().width()
        expect(width).to.be.closeTo(parentWidth, 1) // Allow 1px difference
      })
  })

  it('maintains layout on desktop screens', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Test on desktop
    cy.viewport(1024, 768)

    // Check if layout is horizontal
    cy.get('.MuiStack-root')
      .should('have.css', 'flex-direction', 'row')

    // Check if collapse button is visible
    cy.get('button').should('be.visible')
  })

  it('handles transition smoothly', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Check for transition property
    cy.get('.MuiBox-root').first()
      .should('have.css', 'transition', 'all 0.3s ease-in-out')
  })

  it('handles empty columns gracefully', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={null}
        columnTwo={null}
        searchParams={{}}
      />
    )

    // Component should render without errors
    cy.get('.MuiStack-root').should('exist')
  })

  it('maintains correct icon direction', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={mockColumnOne}
        columnTwo={mockColumnTwo}
        searchParams={{}}
      />
    )

    // Check initial icon (ChevronLeft)
    cy.get('svg').should('have.attr', 'data-testid', 'ChevronLeftIcon')

    // Click to collapse
    cy.get('button').click()

    // Check collapsed icon (ChevronRight)
    cy.get('svg').should('have.attr', 'data-testid', 'ChevronRightIcon')
  })

  it('preserves content when toggling collapse state', () => {
    cy.mount(
      <FoldFilterContainer 
        columnOne={<div>Test Content</div>}
        columnTwo={<div>Main Content</div>}
        searchParams={{}}
      />
    )

    // Check initial content
    cy.contains('Test Content').should('be.visible')
    cy.contains('Main Content').should('be.visible')

    // Collapse and check content
    cy.get('button').click()
    cy.contains('Main Content').should('be.visible')

    // Expand and check content again
    cy.get('button').click()
    cy.contains('Test Content').should('be.visible')
    cy.contains('Main Content').should('be.visible')
  })
}) 