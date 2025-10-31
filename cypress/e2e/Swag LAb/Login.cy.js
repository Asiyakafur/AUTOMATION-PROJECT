/// <reference types="cypress" />
import Login from '../../POM/Login'

describe('Swag login', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.wait(5000);
    });

   it('Successful login test', () => {

        const login = new Login();
        
        cy.fixture('Swag').then((data) => {
            login.enterUsername(data.username);
            login.enterPassword(data.password);
            login.clickLogin();
            cy.wait(2000)
            login.verifyLogin(data.expectedTitle);
    });
    });

});