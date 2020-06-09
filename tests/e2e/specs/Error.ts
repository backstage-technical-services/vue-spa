describe('Visiting a non-existent page', () => {
  before(() => {
    cy.visit('/ojiasdoasdijsadjijasdads')
  })

  it('Should use the error layout', () => {
    cy.get('[layout="error"]')
      .should('be.visible')
  })

  it('Should show the error code', () => {
    cy.get('.error-code')
      .contains('404')
  })

  it('Should show the helper links', () => {
    cy.get('.error-content--links')
      .find('a')
      .its('length')
      .should('be.gt', 0)
  })
})
