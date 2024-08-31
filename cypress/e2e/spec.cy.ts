import { input } from "@angular/core";

describe('Simplilearn page', () => {
  it('Visits the Login', () => {
    cy.visit('https://simplilearn.com')
    cy.get('.login').click()
    //cy.wait(3000)
    cy.contains('Welcome back!')
    cy.get('.email').type('dhivya').should('have.value','dhivya')
    cy.get('#password').type('12345').should('have.value','12345')
    cy.get('[name="btn_login"]').click()
    cy.get('#error_box').should('have.text','Please enter a valid email address')
  }),

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
})
