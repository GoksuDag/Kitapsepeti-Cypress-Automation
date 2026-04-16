import GuestCheckoutPage from '../support/pages/GuestCheckoutPage';
describe('US06: Misafir Olarak Satın Alma Akışı', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.visit('/');
        cy.cleanUI(); 
    });
    it('AC1 - AC6: Misafir Formu Doldurma ve Adres Onaylama', () => {
        GuestCheckoutPage.addToCartBtn.should('exist').click({ force: true });
        cy.wait(2000);
        cy.cleanUI(); 
        GuestCheckoutPage.goToCartBtn.click({ force: true });
        cy.cleanUI();
        GuestCheckoutPage.proceedToCheckoutBtn.should('be.visible').click({ force: true });
        GuestCheckoutPage.guestContinueBtn.should('be.visible').click({ force: true });
        cy.wait(2000); 
        cy.cleanUI();
        GuestCheckoutPage.fullName.type('Test Kullanıcı', { force: true });
        GuestCheckoutPage.email.type('testuser@gmail.com', { force: true });
        GuestCheckoutPage.phone.type('5554443322', { force: true });
        GuestCheckoutPage.city.select('34', { force: true });
        cy.wait(2000); 
        GuestCheckoutPage.town
            .should('not.be.disabled')
            .select('937', { force: true });
        cy.wait(2000);
        GuestCheckoutPage.district
            .should('not.be.disabled')
            .select('34435_35471', { force: true });
        GuestCheckoutPage.addressArea.type('Bülbül Mahallesi, Test Sokak No:123', { force: true });
        cy.cleanUI();
        GuestCheckoutPage.saveAddressBtn.should('be.visible').click({ force: true });
        cy.url({ timeout: 15000 }).should('include', '/payment');
    });
});