class RegisteredCheckoutPage {
    get firstProduct() { 
        return cy.get('.product-item').filter(':visible').first().find('a').first(); 
    }
    get addToCartBtn() { return cy.get('#addToCartBtn'); }
    get buyNowBtn() { return cy.contains('Satın Al'); }
    get orderNextBtn() { 
        return cy.get('.order-next-btn', { timeout: 20000 }).contains('Ödeme Adımına Geç'); 
    }
    get iyzicoTab() { return cy.get('#iyz-tab-credit-card'); }
}
export default new RegisteredCheckoutPage();