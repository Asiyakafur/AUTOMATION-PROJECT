class Addtocart {

  itemName = ".inventory_item_name";

 addItemToCart(itemName){
    cy.get('.inventory_item', {timeout:10000}).should('be.visible');
    cy.contains('.inventory_item', itemName).find('button').click();
    }
  

  goToCart(){
    cy.get('.shopping_cart_link').click();
    }

   verifyItemInCart(itemName){
    cy.get('.cart_item').should('contain.text', itemName);
    }

   checkout(){
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');
  }

   fillCheckoutForm(firstName, lastName, postalCode){
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');

  }

   finishCheckout(){
    cy.get('#finish').click();
    cy.url().should('include', '/checkout-complete.html');

  }

  verifyOrderSuccess() {
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  }

  clearCart() {
  cy.get('body').then(($body) => {
    if ($body.find('.cart_button').length > 0) {
      cy.get('.cart_button').click({ multiple: true });
    }
  });
  cy.get('.cart_item').should('not.exist');

}

verifyEmptyCartCheckoutNotAllowed() {
  // Verify the checkout step page loads
  cy.url().should('include', 'checkout');

  // But ensure no items are listed
  cy.get('.cart_item').should('not.exist');

  // Ensure total is $0.00 (optional)
  cy.contains('Total: $0.00').should('be.visible');
}


}

export default Addtocart