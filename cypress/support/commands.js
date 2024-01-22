// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]')
        .contains(produto)
        .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('Finalizar', () => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
})

Cypress.Commands.add('Cadastro', (nome, sobrenome, usuario, senha) => {
    cy.get('.breadcrumb > .active').should('contain', 'Checkout')
        .click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
    cy.get('#billing_address_1').clear().type('Rua Almirante')
    cy.get('#billing_city').clear().type('Rio de Janeiro')
    cy.get('#select2-billing_state-container')
    cy.get('#billing_postcode').clear().type('71458-999')
    cy.get('#billing_phone').clear().type('9999-9999')
    cy.get('#billing_email').clear().type(usuario)
    cy.get('#terms').click()
    cy.get('#place_order').click()

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

})