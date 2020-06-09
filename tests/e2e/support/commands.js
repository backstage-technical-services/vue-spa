Cypress.Commands.add('getQaElement', (qaId) => cy.get(`[data-qa-id=${qaId}]`))
