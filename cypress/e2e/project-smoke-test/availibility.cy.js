describe('button& field', () => {
  beforeEach(() => {

    cy.visit('/')
  })
  // Vérifier la presence des boutons et des champs connexions et inscriptions 

  it('connexion button and field should be on home page', () => {
    cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy = "nav-link-login"]').should('exist').first().click();
    cy.get('[data-cy = "login-input-username"]').should('exist');
    cy.get('[data-cy = "login-input-password"]').should('exist');
    cy.get('[data-cy = "login-submit"]').should('be.visible').click();
    cy.get('[data-cy="login-errors"]').should('be.visible').contains('Merci de remplir correctement tous les champs')
    cy.get('.text-center').should('exist').click()
    cy.url().should('eq', Cypress.config('baseUrl') + 'register') // cy.url().should('eq', 'http://localhost:8080/#/register')
    cy.contains('Se connecter').click()
    cy.url().should('include', '/login')

  })

})