class ProductDetailPage {
    get firstProduct() { return cy.get('.product-item').filter(':visible').first().find('a').first(); }
    get productTitle() { return cy.get('h1'); }
    get isbnInfo() { return cy.get('body'); }
    get addToCartBtn() { return cy.get('#addToCartBtn'); }
    get basketIcon() { return cy.get(':contains("Sepetim")'); }
    goToFirstProduct() {
        this.firstProduct.should('exist').click({ force: true });
    }
    verifyProductDetails() {
        this.isbnInfo.should(($b) => {
            const t = $b.text().toUpperCase();
            expect(t).to.match(/ISBN|SAYFA|YAZAR|TL/);
        });
    }
}
export default new ProductDetailPage();