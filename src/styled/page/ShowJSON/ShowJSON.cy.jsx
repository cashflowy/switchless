import React from 'react'
import ShowJSON from './ShowJSON'

describe('ShowJSON Component', () => {
  it('renders simple JSON object correctly', () => {
    const simpleData = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com'
    }

    cy.mount(<ShowJSON data={simpleData} />)
    
    // Check if key-value pairs are displayed
    cy.contains('name').should('exist')
    cy.contains('John Doe').should('exist')
    cy.contains('age').should('exist')
    cy.contains('30').should('exist')
  })

  it('renders nested JSON objects', () => {
    const nestedData = {
      user: {
        name: 'John',
        address: {
          street: '123 Main St',
          city: 'Boston'
        }
      }
    }

    cy.mount(<ShowJSON data={nestedData} />)

    // Check nested structure
    cy.contains('user').should('exist')
    cy.contains('address').should('exist')
    cy.contains('123 Main St').should('exist')
  })

  it('renders arrays correctly', () => {
    const arrayData = {
      items: [1, 2, 3],
      users: ['John', 'Jane', 'Bob']
    }

    cy.mount(<ShowJSON data={arrayData} />)

    // Check array rendering
    cy.contains('items').should('exist')
    cy.contains('users').should('exist')
    cy.contains('John').should('exist')
    cy.contains('Jane').should('exist')
  })

  it('handles empty objects', () => {
    const emptyData = {}
    cy.mount(<ShowJSON data={emptyData} />)

    // Check if empty object is rendered
    cy.contains('{}').should('exist')
  })

  it('handles null values', () => {
    const dataWithNull = {
      name: null,
      description: null
    }

    cy.mount(<ShowJSON data={dataWithNull} />)

    // Check null value rendering
    cy.contains('name').should('exist')
    cy.contains('null').should('exist')
  })

  it('handles complex nested data', () => {
    const complexData = {
      id: 1,
      user: {
        name: 'John',
        contacts: {
          email: ['john@example.com', 'john.doe@example.com'],
          phone: {
            home: '123-456-7890',
            work: '098-765-4321'
          }
        },
        preferences: {
          theme: 'dark',
          notifications: true
        }
      },
      metadata: {
        created: '2023-01-01',
        modified: null
      }
    }

    cy.mount(<ShowJSON data={complexData} />)

    // Check complex structure rendering
    cy.contains('user').should('exist')
    cy.contains('contacts').should('exist')
    cy.contains('preferences').should('exist')
    cy.contains('metadata').should('exist')
    
    // Check specific values
    cy.contains('john@example.com').should('exist')
    cy.contains('123-456-7890').should('exist')
    cy.contains('dark').should('exist')
  })

  it('handles boolean values', () => {
    const booleanData = {
      isActive: true,
      isDeleted: false
    }

    cy.mount(<ShowJSON data={booleanData} />)

    // Check boolean rendering
    cy.contains('isActive').should('exist')
    cy.contains('true').should('exist')
    cy.contains('isDeleted').should('exist')
    cy.contains('false').should('exist')
  })

  it('handles undefined values', () => {
    const dataWithUndefined = {
      name: undefined,
      description: 'test'
    }

    cy.mount(<ShowJSON data={dataWithUndefined} />)

    // Check undefined handling
    cy.contains('name').should('exist')
    cy.contains('undefined').should('exist')
    cy.contains('description').should('exist')
    cy.contains('test').should('exist')
  })
}) 