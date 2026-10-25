

describe('Validate the iscription form', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('checker les labels et les champs formulaire inscrition ', () => {
    cy.get('[data-cy="nav-link-register"]').first().click()
    cy.url().should('eq', Cypress.config('baseUrl') + 'register')
    // verifier les labels

    const labels = [
      'Nom',
      'Prénom',
      'Email',
      'Mot de passe',
      'Confirmation de mot de passe'
    ];
    labels.forEach((label) => {
      cy.contains('.error', label).should('exist');
    });

    // cy.get('.error').should('exist').contains('Nom')
    // cy.get('.error').should('exist').contains('Prénom')
    // cy.get('.error').should('exist').contains('Email')
    // cy.get('.error').should('exist').contains('Mot de passe')
    // cy.get('.error').should('exist').contains('Confirmation de mot de passe')

    // verifier la presence des champs et qu ils sont vide
    cy.get('[data-cy="register-input-lastname"]').should('exist').and('have.value', '')
    cy.get('[data-cy="register-input-firstname"]').should('exist').and('have.value', '')
    cy.get('[data-cy="register-input-email"]').should('exist').and('have.value', '')
    cy.get('[data-cy="register-input-password"]').should('exist').and('have.value', '')
    cy.get('[data-cy="register-input-password-confirm"]').should('exist').and('have.value', '')

    // verifier les boutons du formulaire
    cy.get('[data-cy="register-submit"]').should('be.visible')
    cy.get('a[href="#/login"]').contains('Se connecter').click();
    cy.url().should('eq', Cypress.config('baseUrl') + 'login')
    cy.get('[data-cy="nav-link-register"]').first().click()


    // remplir le formulaire 

    cy.get('[data-cy="register-input-firstname"]').type('Amino')
    cy.get('[data-cy="register-input-email"]').type('Aminetest@gmail.com')
    cy.get('[data-cy="register-input-password"]').type('testtest1')
    cy.get('[data-cy="register-input-password-confirm"]').type('testtest1')
    cy.get('[data-cy="register-submit"]').click()

    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Merci de remplir correctement tous les champs');


  })

})