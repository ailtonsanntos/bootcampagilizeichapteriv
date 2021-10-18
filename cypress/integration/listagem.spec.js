/// <reference types="cypress" />

//const { data } = require("cypress/types/jquery");

describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {

        cy.fixture("listagem-vazia").then(data => {

            window.localStorage.setItem('data', JSON.stringify(data)) 
        })         
         cy.visit('https://form-agilizei.netlify.app/listagem.html')

         //deve conter o tamanho
         cy.get('table tbody tr').should('have.length', 0)
    });

    it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {
       // 

       cy.fixture("listagem-com-itens").then(data => {

        window.localStorage.setItem('data', JSON.stringify(data)) 
       })
       // stringify - Um recurso para tornar uma string em um objeto
        
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        cy.get('table tbody tr').should('have.length', 2)
    });
});