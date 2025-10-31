class Addtocart {

  itemName = ".inventory_item_name";

 addItemToCart(itemName){
    cy.get('.inventory_item', {timeout:10000}).should('be.visible');
    cy.contains('.inventory_item', itemName).find('button').click();
    }
    // cy.wait

  goToCart(){
    cy.get('.shopping_cart_link').click();
    }

   verifyItemInCart(itemName){
    cy.get('.cart_item').should('contain.text', itemName);
    }


}

export default Addtocart