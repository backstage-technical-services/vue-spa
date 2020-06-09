describe('The landing page', () => {
  before(() => {
    cy.visit('/')
    cy.scrollTo('topLeft')
  })

  it('Shows the menu', () => {
    cy.getQaElement('mainMenu')
      .should('be.visible')
  })

  it('Shows the expected text', () => {
    cy.contains('Backstage Technical Services is a society formed of students at the University of Bath')
  })

  it('Shows the carousel', () => {
    cy.get('.carousel')
      .should('be.visible')
  })

  it('Should change carousel image', () => {
    cy.get('.carousel')
      .find('img:visible')
      .then(image => {
        const currentImage = image.attr('src')

        cy.wait(12000)

        cy.get('.carousel')
          .find(`img[src="${currentImage}"]`)
          .should('not.be.visible')
      })
  })

  it('Shows the footer', () => {
    cy.getQaElement('footer')
      .should('be.visible')
  })
})
