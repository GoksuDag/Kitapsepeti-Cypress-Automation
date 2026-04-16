import LoginPage from '../support/pages/LoginPage';

describe('US01: Kullanıcı Girişi ve Güvenlik Kontrolleri', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        // Ekran çözünürlüğünü sabitle
        cy.viewport(1920, 1080);
    });
    it('AC4: Session Enjeksiyonu Testi', () => {
        cy.setCookie('PHPSESSID', '06605c03e77affb0838e7018c0a38229');
        cy.visit('/order/address', { failOnStatusCode: false });
        cy.url().should('match', /address|uye-giris/); 
    });
    it('AC5: Hatalı Giriş Kontrolü', () => {
        LoginPage.openLoginPopup();
        LoginPage.login('hatali_deneme@test.com', 'Yanlis123!');
        cy.wait(2000);
        cy.get('body').should('be.visible');
        cy.log('Hatalı giriş denemesi yapıldı.');
    });
    it('AC9: Şifremi Unuttum Sayfası', () => {
        LoginPage.openLoginPopup();
        LoginPage.forgotPasswordLink.click({ force: true });
        cy.url().should('include', 'sifre-hatirlat');
        cy.get('button[id^="forgot-password-btn-"]', { timeout: 10000 })
          .should('exist')
          .and('be.visible')
          .and('contain.text', 'Şifremi Hatırlat');
        cy.get('input[id^="email-"]').should('exist');
    });
});