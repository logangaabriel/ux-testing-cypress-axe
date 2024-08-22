describe('Contact Form', () => {
    beforeEach(() => {
        cy.visit('./src/index.html');
    });

    it('should display the submit button of the form', () => {
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('should disable the submit button until the form is complete', () => {
        cy.get('button[type="submit"]').should('be.disabled');
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('This is a message');
        cy.get('button[type="submit"]').should('not.be.disabled');
    });

    it('should show a success message after form submission', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('This is a message');
        cy.get('form').submit();
        cy.get('#feedback').should('be.visible')
            .and('contain', 'Form successfully submitted');
    });

    it('should display an error message for invalid inputs', () => {
        cy.get('input[name="email"]').type('invalid-email');
        cy.get('form').submit();
        cy.get('#feedback').should('be.visible')
            .and('contain', 'Please enter a valid email address');
    });

    it('should provide clear feedback after each interaction', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="name"]').should('have.value', 'John');
    });

    it('should associate the action of submitting the form with the action of providing information', () => {
        cy.get('button[type="submit"]').should('have.attr', 'aria-label', 'Enviar');
    });

    it('should reset form fields after successful submission', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('This is a message');
        cy.get('form').submit();
        cy.get('#feedback').should('be.visible')
            .and('contain', 'Form successfully submitted');
        cy.get('input[name="name"]').should('have.value', '');
        cy.get('input[name="email"]').should('have.value', '');
        cy.get('textarea[name="message"]').should('have.value', '');
    });

    it('should allow form submission without providing a phone number', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('This is a message');
        cy.get('form').submit();
        cy.get('#feedback').should('be.visible')
            .and('contain', 'Form successfully submitted');
    });
    
    

});
