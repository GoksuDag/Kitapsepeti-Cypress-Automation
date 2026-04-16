import CartPage from '../support/pages/CartPage';
describe('Kitapsepeti - Boş Sepet Süreçleri', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.visit('/');
        cy.cleanUI(); 
    });
    it('US_001: Sepet boşken "ürün bulunmamaktadır" yazısı doğrulanmalı', () => {
        CartPage.acceptCookies();
        CartPage.clickCart();
        cy.wait(2000);
        CartPage.verifyEmptyCart();
    });
});