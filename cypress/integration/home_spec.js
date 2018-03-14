describe('Employee Table', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should have headers of the table properly displayed', function () {
    cy
      .get('.b-table')
      .find('th')
      .then(function ($headers) {
        expect($headers).to.have.lengthOf(3);
      });
  });
  it('should contain at least one row', function () {
    var rows = cy.get('.b-table').find('tr');
    rows.should('have.length.above', 1);
  });
  it('should contain at least one row', function () {
    var rows = cy.get('.b-table').find('tr');
    rows.should('have.length.above', 1);
  });
});