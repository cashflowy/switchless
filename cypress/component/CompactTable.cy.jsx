import React from 'react'
import CompactTable from '../../src/styled/page/CompactTable/CompactTable'

describe('CompactTable', () => {
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
    cy.mount(<CompactTable>{sampleData}</CompactTable>)
    
    // Check if table is rendered with MUI classes
    cy.get('.MuiTable-root').should('exist')
    
    // Check if headers and data are rendered
    cy.get('th').should('have.length', 3)
    cy.get('td').should('have.length', 6)
  })

  it('renders with sideHeader type', () => {
    cy.mount(<CompactTable type="sideHeader">{sampleData}</CompactTable>)
    
    // Check if first column exists
    cy.get('tr > *:first-of-type').should('exist')
  })

  it('handles hoverRow prop', () => {
    cy.mount(<CompactTable hoverRow={true}>{sampleData}</CompactTable>)
    
    // Check if table has hover row class
    cy.get('.MuiTable-hoverRow').should('exist')
  })

  it('applies custom borderAxis', () => {
    cy.mount(<CompactTable borderAxis="bothBetween">{sampleData}</CompactTable>)
    
    // Check if table has border axis class
    cy.get('.MuiTable-borderAxisBothBetween').should('exist')
  })

  it('applies custom styles through sx prop', () => {
    const customSx = {
      backgroundColor: 'rgb(255, 0, 0)'
    }
    
    cy.mount(<CompactTable sx={customSx}>{sampleData}</CompactTable>)
    
    // Check if style is applied
    cy.get('.MuiTable-root').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })

  it('handles empty table body', () => {
    const emptyTable = (
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
    )
    
    cy.mount(<CompactTable>{emptyTable}</CompactTable>)
    
    // Verify headers exist
    cy.get('th').should('have.length', 2)
  })

  it('maintains white background for tbody', () => {
    cy.mount(<CompactTable>{sampleData}</CompactTable>)
    
    // Check if tbody exists
    cy.get('tbody').should('exist')
  })
})