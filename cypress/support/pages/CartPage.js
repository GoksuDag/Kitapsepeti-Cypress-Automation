class CartPage {
    get basketItems() { return cy.get('.cart-item, .product-item-row'); }
    get emptyCartMessage() { return cy.contains('Sepetinizde ürün bulunmamaktadır'); }
    get cartTotal() { return cy.get('.cart-total, .total-price'); }
    get removeProductBtn() { return cy.get('.remove-item, .btn-delete'); }
    get cartIcon() { return cy.get('.shopping-cart, #shoppingCart'); } 
    acceptCookies() {
        cy.get('body').then(($body) => {
            if ($body.find('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').length > 0) {
                cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
            }
        });
    }
    clickCart() {
        cy.visit('/sepet'); 
    }
    verifyBasketIsNotEmpty() {
        this.basketItems.should('have.length.at.least', 1);
    }
   verifyEmptyCart() {
    cy.contains(/ürün bulunmamaktadır|sepetiniz boş/i, { timeout: 10000 }).should('be.visible');
}
}
export default new CartPage();