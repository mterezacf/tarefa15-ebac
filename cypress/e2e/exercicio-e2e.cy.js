/// <reference types="cypress" />
let dadosLogin

import { faker } from '@faker-js/faker';

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Todo Processo de compra', () => {

        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Abominable Hoodie', 'M', 'Green', 4)
        cy.Finalizar()
        cy.Cadastro(dadosLogin.nome, dadosLogin.sobrenome, dadosLogin.usuario, dadosLogin.senha)
    });
});