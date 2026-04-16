class LoginPage {
    openLoginPopup() {
        cy.visit('/');
        cy.get('body').click(0,0, {force: true});
        cy.contains('E-posta ile Giriş').should('be.visible').click({ force: true });
        cy.wait(2000);
    }
    login(email, password) {
        cy.get('input#header-email', { timeout: 10000 })
          .should('exist')
          .type(email, { force: true });
        cy.get('input#header-password')
          .should('exist')
          .type(password, { force: true });
        cy.get('button[id^="login-btn-"], #header-login-submit')
          .first()
          .should('exist')
          .click({ force: true });
    }
    get forgotPasswordLink() {
        return cy.get('a[href*="sifre-hatirlat"]').first();
    }
}
export default new LoginPage();