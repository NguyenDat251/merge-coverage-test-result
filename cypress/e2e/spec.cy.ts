// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

// const { sub } = require('../../src/calc')
// it('subtracts 10 - 5', () => {
//   expect(sub(10, 5)).to.equal(5)
// })

describe('Just visit e2e test', () => {
  it('should visit', () => {
      cy.visit('');
      cy.contains('count').should('exist');
  })
})