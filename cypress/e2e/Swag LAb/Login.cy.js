/// <reference types="cypress" />
import Login from '../../POM/Login'

describe('Swag login', () => {

    const login = new Login();

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.wait(5000);
    });

   it('Successful login test', () => {

    
        
        cy.fixture('Swag').then((data) => {
            login.enterUsername(data.username);
            login.enterPassword(data.password);
            login.clickLogin();
            cy.wait(2000);
            login.verifyLogin(data.expectedTitle);
        });
   });

    
});

describe('Negative Login Test', () => {
    const login = new Login();
    beforeEach(() => {
            cy.visit('https://www.saucedemo.com/');
    })
    
    it('should show error for invalid username', () => {
        login.enterUsername('wrong_user');
        login.enterPassword('secret_sauce');
        login.clickLogin();
        login.verifyErrorMessage('Username and password do not match any user in this service');
    });

    it('should show error for invalid password',()=>{
            
            login.enterUsername('standard_user');
            login.enterPassword('secret_user');
            login.clickLogin();
            login.verifyErrorMessage('Username and password do not match any user in this service');
    
            
     });

    it('should show error when fields are empty',()=>{
    
        login.clickLogin();
        login.verifyErrorMessage('Username is required'); 
    }) 
});
