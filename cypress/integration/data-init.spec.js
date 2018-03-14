const testdata = []

describe('Data fetching', () => {
  it('Loads Employees on load', () => {
    cy.server()
    cy.route('GET', '/api/todos', testdata )
    cy.visit('/')

    cy.get('.table-wrapper .tr')
    .should('have.length', 2)
  })
  it.only('Display error on fetching failure', () => {
    cy.server()
    cy.route({
      url: 'api/todos',
      method: 'GET',
      status: 500,
      response: {}
    })
    cy.visit('/')

    cy.get('.table-wrapper .tr')
    .should('not.exist')

    cy.get('err')
    .should('be.visible')
  })
})