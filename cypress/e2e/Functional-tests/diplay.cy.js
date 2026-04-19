describe('Display', () => {

  beforeEach(() => {
    // Vérifier le chargement de la page 

    cy.visit('http://localhost:8080/#/')
    cy.url().should('include', '/#')

  });
  it('Display products', () => {
    // vérifier l'affichage de la section "Notre selection pour toi"
    cy.contains("Notre sélection pour toi").should('be.visible')
    cy.get('[data-cy="product-home"]').should('be.visible').and('exist')
    cy.get('[data-cy="product-home-img"]').should('be.visible').and('exist')
    cy.get('[data-cy="product-home-name"]').should('be.visible').and('exist')
    cy.get('[data-cy="product-home-ingredients"]').should('be.visible').and('exist')
    cy.get('[data-cy="product-home-price"]').should('be.visible').and('exist')
    cy.get('[data-cy="product-home-link"]').should('be.visible')
      .then((elements) => {
        const randomIndex = Math.floor(Math.random() * elements.length)
        cy.wrap(elements[randomIndex]).click()
      })

  });
  // Vérifier l'affichage après clique sur "Vos les produits"
  it('display de la section NOS PRODUITS', () => {
    cy.contains("Voir les produits").click()
    cy.get('.list-products').should('be.visible').and('exist')
    cy.get('[data-cy="product-link"]').should('be.visible').and('exist').
      then((object) => {
        const random = Math.floor(Math.random() * object.length)
        cy.wrap(object[random]).click()
      })
    //cy.url().should('eq', 'http://localhost:8080/#/products')
    cy.get('[data-cy="detail-product-name"]').should('be.visible')
    cy.get('[data-cy="detail-product-description"]').should('be.visible')
    cy.get('[data-cy="detail-product-skin"]').should('be.visible')
    cy.get('[data-cy="detail-product-aromas"]').should('be.visible')
    cy.get('[data-cy="detail-product-price"]').should('be.visible')
    cy.get('[data-cy="detail-product-stock"]').should('be.visible')
    cy.get('[data-cy="detail-product-add"]').should('be.visible').and('exist').click()



  });

})  