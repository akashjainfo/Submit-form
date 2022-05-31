/// <reference types ="cypress"/>

it('FormTest', () => {
    cy.visit('http://localhost:8080')
    cy.get('#formulate-global-1').type('Akash')
    cy.get('#formulate-global-2').type('Mr.Ajay Jain')
    cy.get('#formulate-global-3').type('Ms.Reena jain')
    cy.get('#formulate-global-4').type('akash.x.jain@fosteringlinux.com')
    cy.get('#formulate-global-5').type('2022-05-10')
    cy.get('#formulate-global-6').select('third').should('have.value','third')
    cy.get('#formulate-global-7').type('akashjainfo')
    cy.get('#formulate-global-8').type('23451178')
    cy.get('#formulate-global-9').click()
})