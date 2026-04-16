class GuestCheckoutPage {
    get addToCartBtn() { return cy.get('span[id*="product-addcart-button"]').first(); }
    get goToCartBtn() { return cy.get('#cart-popup-go-cart'); }
    get proceedToCheckoutBtn() { return cy.get('#cart-buy-btn'); }
    get guestContinueBtn() { return cy.contains('Üye Olmadan Devam Et'); }
    get fullName() { return cy.get('input[name="fullname"]'); }
    get email() { return cy.get('input[name="email"]'); }
    get phone() { return cy.get('#mobile_phone'); }
    get city() { return cy.get('#city_code'); }
    get town() { return cy.get('select[name="town_code"]'); }
    get district() { return cy.get('select[name="district_code"]'); }
    get addressArea() { return cy.get('#address'); }
    get saveAddressBtn() { 
        return cy.get('button[type="submit"]').contains('Adresi Kaydet'); 
    }
    fillGuestForm(user) {
        this.fullName.type(user.name, { force: true });
        this.email.type(user.email, { force: true });
        this.phone.type(user.phone, { force: true });
    }
}
export default new GuestCheckoutPage();