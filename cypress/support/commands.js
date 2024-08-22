Cypress.Commands.add('checkA11y', () => {
    cy.injectAxe();
    cy.checkA11y();
});