
describe('Pruebas básicas de google', () => {

    it.skip('Visitar google.com', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.url().should('match', /www.google.com/i);
    });

    it.skip('Componentes visibles', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.get('#hplogo').should('be.visible');
        cy.get('input.gLFyf').should('be.visible');
        cy.get('.FPdoLc > center > .gNO89b').should('be.visible');
        cy.get('.FPdoLc > center > .RNmpXc').should('be.visible');
    });

    it('Búsqueda', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.get('input.gLFyf').type('Cypress');
        cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();
        cy.wait(3000);
        cy.get('.g .rc').should('have.length.greaterThan', 1);
        cy.get('.csb').should('have.length.greaterThan', 1);
    });

});