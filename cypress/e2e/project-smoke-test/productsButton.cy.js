describe('Check the product view', () => {
  const username = "test2@test.fr";
  const password = "testtest";
  // vister la page de connexion
  beforeEach(() => {
    cy.visit('http://localhost:8080/#/')
    cy.get('[data-cy="nav-link-login"]').should('exist').click()
    cy.get('[data-cy="login-input-username"]').should('exist').type(username)
    cy.get('[data-cy="login-input-password"]').should('exist').type(password)
    cy.get('[data-cy="login-submit"]').click()

    //verifier que l'utlisateur est redirigé
    cy.url().should('eq', 'http://localhost:8080/#/');
  })

  it('should verify the product view', () => {
    // verifier la presence du bouton "Voir les produits"
    cy.contains("Voir les produits").click()
    cy.url().should('eq', 'http://localhost:8080/#/products')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8080/#/');

    cy.get('[data-cy="nav-link-products"]').should('exist').click()
    // choisir un produit d une facon aleatoire 

    cy.get('[data-cy="product-link"]').should('be.visible')
      .then((products) => {
        const randomIndex = Math.floor(Math.random() * products.length);
        cy.wrap(products.eq(randomIndex)).click();
      });


    cy.get('[data-cy="detail-product-price"]').should('exist')
    cy.get('[data-cy="detail-product-stock"]').should('exist')
    cy.get('[data-cy="detail-product-quantity"]').should('exist')
    cy.get('[data-cy="detail-product-add"]').should('exist').click()
    cy.url().should('eq', 'http://localhost:8080/#/cart')


  })
})