














































class Login {

    username = "#user-name";
    password = "#password";
    button = "#login-button";
    logo = ".app_logo"

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
        cy.get(this.button).click();
    }

    verifyLogin(){
        cy.get(this.logo).should('exist', 'expectedTitle')

        
    }

    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
        this.verifyLogin();
    }

}

export default Login




// Class Login{
//     enterUsername(){
//         cy.get(#user-name).type(username);
//     }

//     enterPassword(){
//     cy.get(#password).type(password);
//     }

//     clickLogin(){
//         cy.get(#login-button).click();
//     }

//     verifyLogin(){
//         cy.get(.app_logo).should('contain.text', 'expectedTitle')
//     }

// }

// export default Login