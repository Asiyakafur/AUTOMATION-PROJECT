/// <reference types="cypress" />
import Login from '../../POM/Login';
import Addtocart from '../../POM/Addtocart';
import Logout from '../../POM/Logout';

describe('Swag Logout',()=>{

    const login = new Login();
    const addtocart = new Addtocart();
    const logout =  new Logout();

    before(()=>{
        cy.visit('https://www.saucedemo.com/');
        const username ='standard_user';
        const password = 'secret_sauce';

        //Login
        login.login(username,password);
        //add item to cart
        addtocart.addItemToCart('Sauce Labs Bike Light');
    });

    it('should logout successfully after login and add to cart',()=>{
      //open menu and Logout
      logout.openMenu();
      logout.clickLogout(); 
      //verify logout
      logout.verifyLogout(); 
    });



    it('burger menu should not be seen without being logged in', () => {
    
    cy.visit('https://www.saucedemo.com/');

    cy.get('#react-burger-menu-btn').should('not.exist');
  });
});

