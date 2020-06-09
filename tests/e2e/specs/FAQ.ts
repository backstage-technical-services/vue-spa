describe('The FAQ page', () => {
  before(() => {
    cy.visit('/faq')
  })

  it('Should show the FAQ', () => {
    cy.get('h1')
      .contains('Frequently Asked Questions')

    cy.get('h3')
      .should('have.length', 6)
  })
})
