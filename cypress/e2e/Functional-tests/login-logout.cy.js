describe('Login & Logout', () => {
  const username = "test2@test.fr"
  const password = "testtest"

  it('login with valid user ', () => {
    cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy="nav-link-login"]').click()

    cy.get('[data-cy="login-input-username"]').type(username);
    cy.get('[data-cy="login-input-password"]').should('be.visible').type(password)
    cy.get('[data-cy="login-submit"]').click();

    // Vérifier que le user est redirigé sur la bonne page:
    cy.url().should('eq', 'http://localhost:8080/#/')

    // visualiser la page des produits
    cy.contains('Voir les produits').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:8080/#/products')

    // Vérifier que le bouton "mon panier" existe
    cy.get('[data-cy="nav-link-cart"]').should('exist').should('have.text', 'Mon panier')

    // Déconnexion

    cy.get('[data-cy="nav-link-logout"]').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:8080/#/')
    cy.get('[data-cy="nav-link-logout"]').should('not.exist')


  })
})