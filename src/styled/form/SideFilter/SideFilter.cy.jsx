import React from 'react'
import SideFilter from './SideFilter'

describe('SideFilter Component', () => {
  const mockFields = [
    {
      field: 'input',
      name: 'search',
      label: 'Search',
      type: 'text',
      placeholder: 'Search...',
      width: 'full',
      show: true
    },
    {
      field: 'select',
      name: 'status',
      label: 'Status',
      width: 'half',
      show: true,
      options: [
        { value: '', display: 'All' },
        { value: 'active', display: 'Active' },
        { value: 'inactive', display: 'Inactive' }
      ]
    },
    {
      field: 'select',
      name: 'tags',
      label: 'Tags',
      multiple: true,
      width: 'half',
      show: true,
      options: [
        { value: 'tag1', display: 'Tag 1' },
        { value: 'tag2', display: 'Tag 2' }
      ]
    }
  ]

  it.only('renders all field types correctly', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    cy.mount(
      <SideFilter 
        fields={mockFields}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Check input field
    cy.get('input[name="search"]').should('exist')
      .and('have.attr', 'placeholder', 'Search...')
    
    // Check single select
    cy.get('button[role="combobox"][name="status"]').should('exist')
    cy.get('.MuiSelect-button[name="status"]').should('exist')

  })

  it('handles form submission correctly', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    const searchParams = {}
    cy.mount(
      <SideFilter 
        fields={mockFields}
        searchParams={searchParams}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Fill out form
    cy.get('input[name="search"]').type('test search')
    cy.get('select[name="status"]').select('active')
    
    // Submit form
    cy.get('button[type="submit"]').click()
    
    // Check if router.push was called with correct query params
    cy.get('@routerPush').should('have.been.calledWith', '/test?search=test%20search&status=active')
  })

  it('handles reset button correctly', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    const searchParams = { search: 'existing', status: 'active' }
    cy.mount(
      <SideFilter 
        fields={mockFields}
        searchParams={searchParams}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Click reset button
    cy.contains('Reset').click()
    
    // Check if router.push was called with just the pathname
    cy.get('@routerPush').should('have.been.calledWith', '/test')
  })

  it('shows active state for fields with values', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    const searchParams = { search: 'test' }
    cy.mount(
      <SideFilter 
        fields={mockFields}
        searchParams={searchParams}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Check if field with value has active styling
    cy.get('input[name="search"]')
      .parent()
      .should('have.css', 'background-color', 'rgb(243, 246, 249)') // primary.50
  })

  it('handles multiple select values correctly', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    const searchParams = { tags: 'tag1,tag2' }
    cy.mount(
      <SideFilter 
        fields={mockFields}
        searchParams={searchParams}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Check if multiple values are selected
    cy.get('select[name="tags"]').should('have.value', ['tag1', 'tag2'])
  })

  it('respects show/hide field configuration', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    const fieldsWithHidden = [
      ...mockFields,
      {
        field: 'input',
        name: 'hidden',
        label: 'Hidden Field',
        show: false
      }
    ]

    cy.mount(
      <SideFilter 
        fields={fieldsWithHidden}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    cy.get('input[name="hidden"]').should('not.exist')
  })

  it('handles loading states correctly', () => {
    const mockRouter = { push: cy.spy().as('routerPush') }
    cy.mount(
      <SideFilter 
        fields={mockFields}
        useRouter={() => mockRouter}
        usePathname={() => '/test'}
      />
    )
    
    // Click apply filter and check loading state
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('be.disabled')
    cy.get('button').contains('Reset').should('be.disabled')
  })
}) 