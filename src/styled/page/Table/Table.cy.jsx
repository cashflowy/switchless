import React from 'react'
import CustomTable from './Table'

describe('CustomTable Component', () => {
  const sampleData = (
    <>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1 Cell 1</td>
          <td>Row 1 Cell 2</td>
          <td>Row 1 Cell 3</td>
        </tr>
        <tr>
          <td>Row 2 Cell 1</td>
          <td>Row 2 Cell 2</td>
          <td>Row 2 Cell 3</td>
        </tr>
      </tbody>
    </>
  )

  it('renders with default props', () => {
    cy.mount(<CustomTable>{sampleData}</CustomTable>)
    
    // Check if table components are rendered
    cy.get('.MuiSheet-root').should('exist')
    cy.get('.MuiTable-root').should('exist')
    
    // Check if content is rendered correctly
    cy.get('th').should('have.length', 3)
    cy.get('td').should('have.length', 6)
  })

  it('renders with sideHeader type', () => {
    cy.mount(<CustomTable type="sideHeader">{sampleData}</CustomTable>)
    
    // Check if first column cells have correct styling
    cy.get('tr > *:first-child').first()
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'background-color')  // just check if the property exists
  })

  it('applies custom borderAxis', () => {
    const borderTypes = ['x', 'y', 'both', 'none', 'xBetween', 'yBetween', 'bothBetween']
    
    borderTypes.forEach(borderType => {
      cy.mount(<CustomTable borderAxis={borderType}>{sampleData}</CustomTable>)
      cy.get(`.MuiTable-borderAxis${borderType.charAt(0).toUpperCase() + borderType.slice(1)}`)
        .should('exist')
    })
  })

  it('applies default bothBetween borderAxis', () => {
    cy.mount(<CustomTable>{sampleData}</CustomTable>)
    cy.get('.MuiTable-borderAxisBothBetween').should('exist')
  })

  it('applies custom styles through sx prop', () => {
    const customSx = {
      width: '500px',
      backgroundColor: 'rgb(255, 0, 0)'
    }
    
    cy.mount(<CustomTable sx={customSx}>{sampleData}</CustomTable>)
    
    cy.get('.MuiTable-root')
      .should('have.css', 'width', '500px')
      .and('have.css', 'background-color', 'rgb(255, 0, 0)')
  })

  it('maintains white background for tbody', () => {
    cy.mount(<CustomTable>{sampleData}</CustomTable>)
    
    cy.get('tbody')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)') // white
  })

  it('handles overflow correctly', () => {
    // Create wide table content
    const wideContent = (
      <tbody>
        <tr>
          {Array.from({ length: 20 }, (_, i) => (
            <td key={i}>Column {i + 1}</td>
          ))}
        </tr>
      </tbody>
    )

    cy.mount(
      <div style={{ width: '300px' }}>
        <CustomTable>{wideContent}</CustomTable>
      </div>
    )

    cy.get('.MuiSheet-root')
      .should('have.css', 'overflow', 'auto')
  })

  it('applies hover effect on rows', () => {
    cy.mount(<CustomTable>{sampleData}</CustomTable>)
    
    // Check if table has hover row functionality
    cy.get('.MuiTable-hoverRow').should('exist')
  })

  it('handles empty table content', () => {
    cy.mount(<CustomTable>{null}</CustomTable>)
    
    // Should render without errors
    cy.get('.MuiSheet-root').should('exist')
    cy.get('.MuiTable-root').should('exist')
  })

  it('maintains correct structure with minimal content', () => {
    const minimalContent = (
      <tbody>
        <tr>
          <td>Single Cell</td>
        </tr>
      </tbody>
    )

    cy.mount(<CustomTable>{minimalContent}</CustomTable>)
    
    // Check basic structure
    cy.get('.MuiSheet-root').should('exist')
    cy.get('.MuiTable-root').should('exist')
    cy.contains('Single Cell').should('exist')
  })
}) 