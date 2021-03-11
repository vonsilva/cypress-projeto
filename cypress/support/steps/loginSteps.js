/* global Given, Then, When, And */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("Acesso site swag labs", () => {
    loginPage.acessarSite();
})

When("Insiro dados de login:", (dataTable) => {
    console.log('raw : ' + dataTable.raw());
    console.log('rows : ' + dataTable.rows());
    console.log('HASHES : ' );
    var propValue;
    dataTable.hashes().forEach(elem =>{
      for(var propName in elem) {
        propValue = elem[propName]

        console.log(propName,propValue);
    }

    dataTable.hashes().forEach(elem => {
        cy.log("Adding "+elem.ProductName);
        cy.get('.inventory_item_name').contains(elem.ProductName).parent().parent().next().find('.btn_primary').click();
        });

    });
})

Then("Validar dados de login", () => {
    console.log('nada')
})

And("Acessar pagina", () => {
    console.log('nada')
})