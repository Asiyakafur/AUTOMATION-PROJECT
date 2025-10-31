class Logout {
    openMenu(){
        cy.get('#react-burger-menu-btn').click();
    }

    clickLogout(){
        cy.get('#logout_sidebar_link').click();
    }

    verifyLogout(){
        cy.url().should('include','saucedemo.com');
        cy.get('#login-button').should('be.visible');
    }

    logout(){
        this.openMenu();
        cy.wait(1000);//wait for menu animation
        this.clickLpgout();
        this.verifyLogout();
    }

}
export default Logout;