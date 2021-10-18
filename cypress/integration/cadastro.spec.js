/// <reference types="cypress" />

// Load Chance
var Chance = require('chance')
// Instantiate Chance so it can be used
var chance = new Chance()



//Mocha -> Test Runner
//describe, context, it
describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')

        // Inputs de texto / textarea / email -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // Inputs radio / checkboxes -> check
        cy.get('input[value=m]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        // Inputs do tipo combobox / select -> Select
        //{ force: true}) 
         
        cy.get('select#years').select('2006', { force: true})
        cy.get('select#months').select('Janeiro', { force: true})
        cy.get('select#days').select('8', { force: true})

        // Inputs de senha -> type
        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        //Input clicar no botão -> click
        //cy.get('button#submitbtn').click()

        // Podemos usar também o cy.contains conforme o texto que você 
        //localizou analisando com essa ferramenta
        cy.contains('Finalizar cadastro').click()


        //Espero que a minha aplicação seja direcionada para a listagem
        //url
        //Should contain listagem
        //deve conter listagem
        cy.url().should('contain', 'listagem')

        //deveria executar uma requisção para o servidor XPTO

        // input#firstpassword
        // input#secondpassword
        // button#submitbtn
      


        //input[name=firstName]
        //input[name=lastName]
        //textarea[name=adress]
        //input[name=emailAdress]

        //input[value=m]
        //input[type=checkbox]

        // select#countries
        // select#years
        // select#months
        // select#days

        
    });

});