import CheckoutPage from '../support/pages/RegisteredCheckoutPage';
import LoginPage    from '../support/pages/LoginPage';

describe('US05: Kayıtlı Kullanıcı Ödeme Akışı', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.viewport(1920, 1080); 
        cy.fixture('user').as('userData'); 
        cy.visit('/');
    });
    it('Başarılı Ödeme Sayfası Doğrulaması', function() {
        LoginPage.openLoginPopup();
        cy.wait(1500); 
        LoginPage.login('goksudaggunen@gmail.com', 'Kitap-Sepeti123!');
        cy.wait(2000);
        CheckoutPage.firstProduct.should('exist').click({ force: true });
        CheckoutPage.addToCartBtn.should('exist').click({ force: true });
        cy.wait(2000);
        cy.visit('/sepet');
        CheckoutPage.buyNowBtn.should('exist').click({ force: true });
        cy.url({ timeout: 30000 }).should('include', '/order');
        CheckoutPage.orderNextBtn.should('exist').click({ force: true });
        cy.url({ timeout: 20000 }).should('include', 'payment');
        CheckoutPage.iyzicoTab.should('exist');
        cy.log('TEST BAŞARIYLA TAMAMLANDI');
    });
});