/// <reference types="cypress" />
 import Login from '../../POM/Login'
 import Addtocart from '../../POM/Addtocart'
 

describe('Swag AddToCart',()=>{

    const login = new Login();
    const addtocart = new Addtocart();

    before(()=>{
        login.visit();
        login.enterUsername('standard_user');
        login.enterPassword('secret_sauce');
        login.clickLogin();
    }) 
    //add item to cart
    cy.wait(1000);

    it('should add an item to the cart successfully',()=>{
        addtocart.addItemToCart('Sauce Labs Bike Light');
        addtocart.goToCart();
    //verify item appears in cart
         addtocart.verifyItemInCart('Sauce Labs Bike Light');
    })
})
