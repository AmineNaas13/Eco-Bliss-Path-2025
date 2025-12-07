describe('cart connected', () => {

  const username = 'test2@test.fr'
  const password = 'testtest'

  before(() => {
    cy.visit('http://localhost:8080/#/')
  })
  it('add button when cart is connected', () => {
    // Se connecter
    cy.get('[data-cy="nav-link-login"]').click();
    cy.get('[data-cy="login-input-username"]').should('exist').type(username);
    cy.get('[data-cy="login-input-password"]').should('exist').type(password);
    cy.get('[data-cy="login-submit"]').click()

    // Vérifier que la page se charge correctement
    cy.url().should('eq', 'http://localhost:8080/#/');

    // Séléctionner le premier produit
    cy.contains('Voir les produits').first().should('exist').click();
    cy.contains('Consulter').click()
    cy.contains('Ajouter au panier').should('exist')


    // Sélectionner un produit aléatoirement 

    // Récupérer le nombre total de produits affichés

    cy.get('.list-products').its('length').then((productCount) => {

      // Générer un index aléatoire
      const randomProduct = Math.floor(Math.random() * productCount)
      cy.get('.list-products').eq(randomProduct).contains("Consulter").click();
      cy.get('[data-cy="detail-product-price"]').should('exist');
      cy.get('[data-cy="detail-product-stock"]').should('be.visible');

    })
    cy.get('[data-cy="detail-product-add"]').should('exist');
    cy.get('[data-cy="detail-product-add"]').should('be.visible').click();


  })
  after(() => {
    cy.get('[data-cy="nav-link-logout"]').first().click()
    cy.url().should('eq', "http://localhost:8080/#/")

  })
})