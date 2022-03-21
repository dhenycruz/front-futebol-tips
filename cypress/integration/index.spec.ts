describe('The home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('sucessfully loads title', () => {
    cy.contains('Página inicial');
  });
});

export {};