/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    inserirDadosLogin(nome, senha) {
        cy.get(loginElements.username())
            .type(nome)
            .should('have.text', nome)

        cy.get(loginElements.password())
            .type(senha)
            .should('have.text', senha)
    }
}

export default LoginPage;