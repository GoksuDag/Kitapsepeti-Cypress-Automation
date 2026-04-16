import ProductPage from '../support/pages/ProductDetailPage';

describe('US03: Ürün Detay ve Sepet Süreci', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false); 
        cy.visit('/', { timeout: 100000 });
        cy.cleanUI();
    });
    it('AC1-AC6: Tüm Kriterleri Doğrula ve Süreci Bitir', () => {
        ProductPage.goToFirstProduct();
        ProductPage.productTitle.should('be.visible');
        ProductPage.verifyProductDetails();
        cy.intercept('POST', '**/srv/service/cart/add-to-cart').as('addToCart');
        ProductPage.addToCartBtn.should('be.visible').click({ force: true });
        cy.wait('@addToCart', { timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            cy.wait(2000);
            cy.reload();
            cy.cleanUI();
            ProductPage.basketIcon.should('exist').then(($el) => {
                const basketText = $el.text();
                const countMatch = basketText.match(/\d+/);
                const count = countMatch ? parseInt(countMatch[0]) : 0;
                expect(count, 'Sepet hala boş!').to.be.at.least(1);
            });
            cy.contains(/sepet|eklendi/i).should('exist');
        });
    });
});