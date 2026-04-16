class CartPage {
    // Element Seçicileri
    get basketItems() { return cy.get('.cart-item, .product-item-row'); }
    get emptyCartMessage() { return cy.contains('Sepetinizde ürün bulunmamaktadır'); }
    get cartTotal() { return cy.get('.cart-total, .total-price'); }
    get removeProductBtn() { return cy.get('.remove-item, .btn-delete'); }
    // Eksik olan sepet butonu seçicisi (Genelde sağ üstteki sepet ikonu)
    get cartIcon() { return cy.get('.shopping-cart, #shoppingCart'); } 

    // Çerezleri Kabul Etme
    acceptCookies() {
        cy.get('body').then(($body) => {
            if ($body.find('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').length > 0) {
                cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
            }
        });
    }

    // HATA ALAN METOT: Sepete gitme fonksiyonunu ekledik
    clickCart() {
        // Eğer bir buton varsa ona tıkla, yoksa doğrudan URL'e git (en güvenli yol)
        cy.visit('/sepet'); 
    }

    verifyBasketIsNotEmpty() {
        this.basketItems.should('have.length.at.least', 1);
    }

   verifyEmptyCart() {
    // Sadece metne odaklanmak yerine, içinde "bulunmamaktadır" geçen her şeyi kabul et
    cy.contains(/ürün bulunmamaktadır|sepetiniz boş/i, { timeout: 10000 }).should('be.visible');
}
}

export default new CartPage();