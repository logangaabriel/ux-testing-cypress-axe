describe('Accessibility Tests for Contact Form', () => {
    beforeEach(() => {
        cy.visit('./src/index.html');
        cy.injectAxe();
    });

    it('Should be free of accessibility issues on the initial load', () => {
        cy.checkA11y();
    });

    it('Should display an accessible feedback message after form submission', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('This is a message');
        cy.get('form').submit();
        cy.checkA11y();
    });

    it('Should display an accessible error message for invalid inputs', () => {
        cy.get('input[name="email"]').type('invalid-email');
        cy.get('form').submit();
        cy.checkA11y();
    });

    it('Should ensure all form fields are accessible', () => {
        cy.checkA11y();
    });
});
