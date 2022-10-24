describe('create playlist', () => {
  it('playlist is created after user clicks on new playlist and fills in name', () => {
    cy.visit('localhost:3001');
    // Click on 'nieuwe playlist'
    cy.findByText(/nieuwe playlist/i).click();
    // Fill in playlist name
    cy.findByPlaceholderText(/mijn playlist/i).type('Mijn playlist');
    // Click on 'Aanmaken' button
    cy.findByText(/aanmaken/i).click();
    // Succes message pops up
    cy.findByText(/playlist succesvol aangemaakt!/i).should('exist');
  });
});
