///<reference types = "Cypress"/>
describe('empty spec', () => {
  it('test cypress io exaples page', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('eq','https://example.cypress.io/')


  })
})