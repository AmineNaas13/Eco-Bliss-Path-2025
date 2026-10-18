

describe(' Verify the login button and input fields', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/#/')
  })

  // check login button
  it('check login button', () => {
    //cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy = "nav-link-login"]').should('exist').first().click()
    cy.get('[data-cy="login-input-username"]').should('exist')
    cy.get('[data-cy="login-input-password"]').should('exist')
    cy.get('[data-cy="login-submit"]').should('exist').click()
    cy.get('[data-cy= "login-errors"]').should('exist').contains("Merci de remplir correctement tous les champs")
  });
  it('check inscription field', () => {
    //cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy = "nav-link-register"]').should('exist').first().click()
    cy.get('[data-cy = "register-input-lastname"]').should('exist')
    cy.get('[data-cy = "register-input-firstname"]').should('exist')
    cy.get('[data-cy = "register-input-password"]').should('exist')
    cy.get('[data-cy = "register-input-password-confirm"]').should('exist')
    cy.get('[data-cy = "register-submit"]').should('exist').click()
    cy.get('[data-cy = "register-errors"]').should('exist').contains('Merci de remplir correctement tous les champs (adresse email, mot de passe de 5 caractères minimum, confirmation identique)')

    cy.contains('Se connecter').click()
    //cy.url().should('eq', "http://localhost:8080/#/login")
    cy.url().should('eq', Cypress.config('baseUrl') + 'login')

  });
})

















