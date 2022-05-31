/// <reference types="cypress" />

it('google test',()=>{
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by step{enter}');


})