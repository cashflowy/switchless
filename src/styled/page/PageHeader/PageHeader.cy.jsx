import React from 'react'
import PageHeader from './PageHeader'
import { Button } from '@mui/joy'

describe('PageHeader Component', () => {
  const mockBreadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Section', href: '/section' },
    { text: 'Current Page' }
  ]

  it('renders with default props', () => {
    cy.mount(<PageHeader header="Test Header" />)

    cy.get('[data-cy="page-header"]').should('exist')
    cy.get('.MuiTypography-h3').should('contain', 'Test Header')
  })

  it('renders with custom header level', () => {
    cy.mount(<PageHeader header="Test Header" level="h1" />)

    cy.get('.MuiTypography-h1').should('contain', 'Test Header')
  })

  it('renders header as React component', () => {
    const CustomHeader = <div data-testid="custom-header">Custom Header</div>
    cy.mount(<PageHeader header={CustomHeader} />)

    cy.get('[data-testid="custom-header"]').should('contain', 'Custom Header')
  })

  it('renders header with object format', () => {
    const headerObject = { main: 'Main', sub: 'Sub' }
    cy.mount(<PageHeader header={headerObject} />)

    cy.get('.MuiTypography-h3').within(() => {
      cy.get('span').first().should('have.css', 'opacity', '0.5')
      cy.get('span').last().should('have.css', 'opacity', '1')
    })
  })

  it('renders breadcrumbs correctly', () => {
    cy.mount(
      <PageHeader 
        header="Test Header" 
        breadcrumbs={mockBreadcrumbs}
      />
    )

    // Check if all breadcrumbs are rendered
    cy.get('.MuiBreadcrumbs-root').within(() => {
      cy.get('a').should('have.length', 2) // Two links
      cy.get('a').first().should('contain', 'Home')
      cy.get('a').last().should('contain', 'Section')
      cy.get('.MuiTypography-root').last().should('contain', 'Current Page')
    })
  })

  it('renders right buttons as component', () => {
    const RightButtons = () => (
      <Button data-testid="right-button">Action</Button>
    )

    cy.mount(
      <PageHeader 
        header="Test Header" 
        RightButtons={RightButtons}
      />
    )

    cy.get('[data-testid="right-button"]').should('contain', 'Action')
  })

  it('renders right buttons as direct element', () => {
    const buttons = <Button data-testid="static-button">Static Button</Button>

    cy.mount(
      <PageHeader 
        header="Test Header" 
        RightButtons={buttons}
      />
    )

    cy.get('[data-testid="static-button"]').should('contain', 'Static Button')
  })

  it('is responsive on mobile screens', () => {
    cy.mount(
      <PageHeader 
        header="Test Header" 
        RightButtons={() => <Button>Action</Button>}
      />
    )

    // Test mobile layout
    cy.viewport('iphone-6')
    cy.get('[data-cy="page-header"]')
      .should('have.css', 'flex-direction', 'column')

    // Test desktop layout
    cy.viewport(1024, 768)
    cy.get('[data-cy="page-header"]')
      .should('have.css', 'flex-direction', 'row')
  })

  it('handles empty breadcrumbs gracefully', () => {
    cy.mount(
      <PageHeader 
        header="Test Header" 
        breadcrumbs={[]}
      />
    )

    cy.get('.MuiBreadcrumbs-root').should('not.exist')
  })

  it('handles long header text gracefully', () => {
    const longHeader = 'This is a very long header text that should still be displayed properly without breaking the layout'
    cy.mount(<PageHeader header={longHeader} />)

    cy.get('.MuiTypography-h3')
      .should('contain', longHeader)
      .and('be.visible')
  })

  it('maintains layout with all features enabled', () => {
    const RightButtons = () => (
      <div>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </div>
    )

    cy.mount(
      <PageHeader 
        header="Test Header"
        breadcrumbs={mockBreadcrumbs}
        RightButtons={RightButtons}
      />
    )

    // Check overall structure
    cy.get('[data-cy="page-header"]').within(() => {
      cy.get('.MuiBreadcrumbs-root').should('exist')
      cy.get('.MuiTypography-h3').should('exist')
      cy.get('button').should('have.length', 2)
    })
  })

  it('handles breadcrumb navigation correctly', () => {
    cy.mount(
      <PageHeader 
        header="Test Header" 
        breadcrumbs={mockBreadcrumbs}
      />
    )

    // Check if breadcrumb links have correct hrefs
    cy.get('.MuiBreadcrumbs-root a').first()
      .should('have.attr', 'href', '/')
    cy.get('.MuiBreadcrumbs-root a').last()
      .should('have.attr', 'href', '/section')
  })
}) 