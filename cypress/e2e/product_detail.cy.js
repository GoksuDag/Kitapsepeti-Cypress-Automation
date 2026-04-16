import ProductPage from '../support/pages/ProductDetailPage';

describe('US03: Ürün Detay ve Sepet Süreci', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', () => false); 
        cy.visit('/', { timeout: 100000 });
        cy.cleanUI(); // Commands içindeki o güçlü temizleyici
    });

    it('AC1-AC6: Tüm Kriterleri Doğrula ve Süreci Bitir', () => {
        // 1. Ürüne Git (AC1)
        ProductPage.goToFirstProduct();
        ProductPage.productTitle.should('be.visible');
        
        // 2. Detay Kontrolü (AC2 & AC3)
        ProductPage.verifyProductDetails();

        // 3. Sepete Ekle (AC4)
        cy.intercept('POST', '**/srv/service/cart/add-to-cart').as('addToCart');
        ProductPage.addToCartBtn.should('be.visible').click({ force: true });

        // 4. API ve Sepet Kontrolü (AC5 & AC6)
        cy.wait('@addToCart', { timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

            cy.wait(2000);
            cy.reload();
            cy.cleanUI();

            // SAYAÇ KONTROLÜ
            ProductPage.basketIcon.should('exist').then(($el) => {
                const basketText = $el.text();
                const countMatch = basketText.match(/\d+/);
                const count = countMatch ? parseInt(countMatch[0]) : 0;
                expect(count, 'Sepet hala boş!').to.be.at.least(1);
            });

            // Onay Metni
            cy.contains(/sepet|eklendi/i).should('exist');
        });
    });
});