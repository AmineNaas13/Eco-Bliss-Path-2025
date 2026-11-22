describe('Log in & Log out ', () => {
  const login = "test2@test.fr";
  const password = "testtest";

  it('Connexion with valid user', () => {
    cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy="nav-link-login"]').click()

    // saisir les champs Email et mot de passe
    cy.get('[data-cy="login-input-username"]').type(login)
    cy.get('[data-cy="login-input-password"]').type(password)
    cy.get('[data-cy="login-submit"]').click()

    // verifier que je suis connecté
    cy.url().should('eq', 'http://localhost:8080/#/')

    //Voir que le bouton Pannier est visible
    cy.get('[data-cy="nav-link-cart"]').should("be.visible").should('have.text', 'Mon panier')
    cy.contains('Voir les produits').click()
    cy.url().should('eq', 'http://localhost:8080/#/products')
    cy.go('back')
    cy.reload();// recharger la page 

    // Verifuer que le bouton déconnexion existe
    cy.get('[data-cy="nav-link-logout"]').should("exist").click()
    cy.url().should('eq', 'http://localhost:8080/#/')
    cy.get('[data-cy="nav-link-logout"]').should("not.exist")
    cy.get('[data-cy="nav-link-login"]').should("exist")

  })
})