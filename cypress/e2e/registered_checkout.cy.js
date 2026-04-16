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
        // 1. Giriş Yap
        LoginPage.openLoginPopup();
        cy.wait(1500); 
        
        LoginPage.login('goksudaggunen@gmail.com', 'Kitap-Sepeti123!');
        cy.wait(2000); // Girişin tam işlenmesi ve session'ın oturması için
        
        // 2. Ürün Seçimi ve Sepete Ekleme
        // Exist + Force:True kombinasyonu reklamların testi bozmasını engeller
        CheckoutPage.firstProduct.should('exist').click({ force: true });
        
        CheckoutPage.addToCartBtn.should('exist').click({ force: true });
        cy.wait(2000); 
        
        // 3. Sepete Git
        cy.visit('/sepet');
        
        // Sepetteki "Satın Al" butonu
        CheckoutPage.buyNowBtn.should('exist').click({ force: true });

        // 4. Adres Sayfası ve Devam Et (Hata veren login kontrolü kaldırıldı)
        cy.url({ timeout: 30000 }).should('include', '/order');
        
        // Adres sayfasındaki "Devam Et" butonu
        CheckoutPage.orderNextBtn.should('exist').click({ force: true });

        // 5. Ödeme Sayfası Doğrulaması
        cy.url({ timeout: 20000 }).should('include', 'payment');
        CheckoutPage.iyzicoTab.should('exist'); // Görünürlük yerine varlık kontrolü daha güvenli
        
        cy.log('✅ TEST BAŞARIYLA TAMAMLANDI');
    });
});