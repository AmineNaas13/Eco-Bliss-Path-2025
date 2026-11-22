describe('XSS vulnerability in the comment section', () => {

  const username = "test2@test.fr";
  const password = "testtest";

  it('non affichage du bloc avis en cas de déconnexion', () => {
    cy.visit('http://localhost:8080/#/')
    cy.get("[data-cy=nav-link-reviews]").click()
    cy.get("[data-cy=review-input-rating]").should('not.exist')
    cy.get("[data-cy=review-input-title]").should('not.exist')
    cy.get("[data-cy=review-input-comment]").should('not.exist')
    cy.get("[data-cy=review-submit]").should('not.exist')

  })
  it('affiche le formulaire en cas de connexion', () => {
    cy.visit('http://localhost:8080/#/')

    cy.get("[data-cy=nav-link-reviews]").click()
    cy.url().should('eq', 'http://localhost:8080/#/reviews')

    cy.get("[data-cy=nav-link-login]").click()

    cy.get("[data-cy=login-input-username]").type(username)
    cy.get("[data-cy=login-input-password]").type(password)
    cy.get("[data-cy=login-submit]").click()
    cy.get("[data-cy=nav-link-reviews]").click()
    cy.location('hash').should('eq', '#/reviews')


    // Vérifier que le bloc s'affiche 
    cy.get(".review-section").should('be.visible')


    //cy.get("[data-cy=review-input-rating-images]").should('exist')
    // cy.get("[data-cy=review-input-title]").should('exist')
    // cy.get("[data-cy=review-input-comment]").should('exist')
    // cy.get("[data-cy=review-submit]").should('exist')
    //cy.get("[data-cy=review-form]").should('be.visible')


  });
})