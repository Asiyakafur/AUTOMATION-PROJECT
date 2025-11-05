
class Login {

    username = "#user-name";
    password = "#password";
    button = "#login-button";
    logo = ".app_logo";
    errorMessage = '[data-test="error"]';

    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username){
        cy.get(this.username).type(username);
    }

    enterPassword(password){
        cy.get(this.password).type(password);
    }

    clickLogin(){
        cy.get(this.button,{timeout:10000}).click();
    }

    verifyLogin(){
        cy.get(this.logo).should('exist');
    }

    verifyErrorMessage(expectedMessage){
        cy.get(this.errorMessage).should('contain.text', expectedMessage);
    }

    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
        this.verifyLogin();
    }
}

export default Login