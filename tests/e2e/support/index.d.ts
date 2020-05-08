declare namespace Cypress {
  export interface Chainable {
    getQaElement(qaId: string): Chainable;
  }
}
