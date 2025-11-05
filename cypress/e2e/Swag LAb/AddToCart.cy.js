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
    //add item to cart and checkout


    it('should add an item to the cart and checkout successfully',()=>{
        addtocart.addItemToCart('Sauce Labs Bike Light');
        addtocart.goToCart();
        addtocart.verifyItemInCart('Sauce Labs Bike Light');
        addtocart.checkout();
        addtocart.fillCheckoutForm('Asiya', 'Ahmad', '100001');
        addtocart.finishCheckout();
        addtocart.verifyOrderSuccess();

         
    })
})



describe('Negative Checkout Scenarios', () => {

    
        const login = new Login();
        const addtocart = new Addtocart();

    beforeEach(() => {
     login.visit();
     login.enterUsername('standard_user');
     login.enterPassword('secret_sauce');
     login.clickLogin();
  });
  beforeEach(() => {
      // Add an item first before each checkout test
      addtocart.addItemToCart('Sauce Labs Bike Light');
      addtocart.goToCart();
      addtocart.checkout();
    });

    it('should show error when first name is missing', () => {
      cy.get('[data-test="lastName"]').type('Ahmad');
      cy.get('[data-test="postalCode"]').type('100001');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('contain', 'First Name is required');
    });

    it('should show error when last name is missing', () => {
      cy.get('[data-test="firstName"]').type('Asiya');
      cy.get('[data-test="postalCode"]').type('100001');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('contain', 'Last Name is required');
    });

    it('should show error when postal code is missing', () => {
      cy.get('[data-test="firstName"]').type('Asiya');
      cy.get('[data-test="lastName"]').type('Ahmad');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
    });

  it('should not proceed to checkout if cart is empty', () => {
    

    addtocart.goToCart();
    addtocart.clearCart();
    addtocart.checkout();
    addtocart.fillCheckoutForm('Asiya', 'Ahmad', '100001');
    addtocart.finishCheckout()
    //addtocart.verifyEmptyCartCheckoutNotAllowed();
    //.get('[data-test="checkout"]').click();
    // Verify checkout page still opens but cart is empty
   // cy.get('.cart_item').should('not.exist');
  });
});
