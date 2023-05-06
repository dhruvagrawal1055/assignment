describe('Background Color Changer', () => {
  beforeEach(() => {
    cy.visit('localhost:3001');
  });

  it('displays the default background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('changes the background color when the button is clicked', () => {
    cy.get('[data-cy=change-color-button]').click();
    cy.get('body').should('have.css', 'background-color').and('not.equal', 'rgb(255, 255, 255)');

  });
});
