import CartPage from '../support/pages/CartPage';
describe('Kitapsepeti - Sepet Süreçleri Otomasyonu', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.visit('/');
        cy.cleanUI(); 
    });
    it('US_001: Boş sepet kontrolü yapılmalı', () => {
        CartPage.acceptCookies();
        CartPage.clickCart();
        CartPage.verifyEmptyCart();
    });
});