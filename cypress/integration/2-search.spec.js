/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('meals of the day flow', () => {
  it('should search a meal', () => {
    cy.intercept(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=appl'
    ).as('searching')
    cy.visit('/')
    cy.get('[data-test="searchbar"]').should('not.be.visible')
    cy.get('[aria-label="search a meal"]').should('to.exist').click()
    cy.get('[data-test="searchbar"]').should('to.be.visible')
    cy.get('[placeholder="I\'m craving..."]')
      .should('to.have.focus')
      .type('appl')
    cy.wait('@searching')
    cy.get('[data-test="meal-card"]').its('length').should('be.gt', 0)
  })
})
