class LoginPage {
    openLoginPopup() {
        cy.visit('/');
        // Overlay engelini aşmak için body'e tıklayıp drawer'ı açıyoruz
        cy.get('body').click(0,0, {force: true});
        cy.contains('E-posta ile Giriş').should('be.visible').click({ force: true });
        cy.wait(2000); // Drawer animasyonu için bekleme
    }

    login(email, password) {
        // ID'si "header-email" olan veya e-posta alanı olan kutuyu bul
        cy.get('input#header-email', { timeout: 10000 })
          .should('exist')
          .type(email, { force: true });

        cy.get('input#header-password')
          .should('exist')
          .type(password, { force: true });

        // ID'si "login-btn-" ile başlayan butona tıkla
        cy.get('button[id^="login-btn-"], #header-login-submit')
          .first()
          .should('exist')
          .click({ force: true });
    }

    get forgotPasswordLink() {
        // Link metni veya href üzerinden bul
        return cy.get('a[href*="sifre-hatirlat"]').first();
    }
}

export default new LoginPage();