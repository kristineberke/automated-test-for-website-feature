describe('Example E2E Test', () => {
  it('should load the homepage and verify the title', () => {
    // Visit the homepage
    cy.visit('/');

    // Check that the title is correct
    cy.title().should('include', 'Example Domain');
  });

  it('should verify the button text and change heading text after clicking the button', () => {
    // Visit the homepage
    cy.visit('/');

    // Verify that the button text is correct
    cy.get('button#change-text-button').should('have.text', 'Click me to change text');

    // Click the button to change the heading text
    cy.get('button#change-text-button').click();

    // Verify that the heading text has changed
    cy.get('h1').should('have.text', 'New Heading Text');
  });
});
