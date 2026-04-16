import SearchPage from '../support/pages/SearchPage';
describe('US02: Ürün Arama ve Listeleme Fonksiyonları', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.visit('/');
        cy.cleanUI();
    });
    it('AC1 & AC2: Başarılı Arama Kontrolü', () => {
        SearchPage.searchProduct('Sabahattin Ali');
        cy.url().should('include', 'arama');
    });
    it('AC3: Negatif Arama - Sonuç Yok Kontrolü', () => {
        SearchPage.searchProduct('asdfqwert12345');
        cy.get('body', { timeout: 10000 }).should(($body) => {
            const text = $body.text().toLowerCase();
            const hasNoProduct = !$body.find('.product-item').length;
            expect(text.includes('bulunmadı') || text.includes('bulunamadı') || hasNoProduct).to.be.true;
        });
    });
    it('AC4 & AC5: Ürün Kartı Detayları', () => {
        SearchPage.searchProduct('Nutuk');
        SearchPage.elements.productCards().first().within(() => {
            cy.get('img').should('be.visible');
            cy.get('.product-title, a').should('not.be.empty');
            cy.get('[class*="price"]').should('be.visible');
            cy.contains(/Sepete|Ekle/i).should('exist');
        });
    });
    it('AC6: Sıralama Menüsü Kontrolü', () => {
        SearchPage.searchProduct('Roman');
        SearchPage.elements.sortSelect().then(($el) => {
            if ($el.is('select')) {
                cy.wrap($el).select(1, { force: true });
            } else {
                cy.wrap($el).click({ force: true });
            }
        });
    });
    it('AC7: Filtreleme Paneli Kontrolü', () => {
        SearchPage.searchProduct('Kitap');
        SearchPage.elements.filterPanel().should('exist').then(($el) => {
            const pattern = /Kategori|Marka|Model|Filtre|Yayınevi/i;
            expect($el.text()).to.match(pattern);
        });
    });
    it('AC8: Kategori Navigasyonu', () => {
        SearchPage.elements.categoryLink().click({ force: true });
        cy.url({ timeout: 15000 }).should('match', /roman|edebiyat|kategori/i);
    });
    it('AC9: Infinite Scroll (Sonsuz Kaydırma)', () => {
        SearchPage.searchProduct('Tarih');
        SearchPage.elements.productCards().should('have.length.at.least', 1);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.get('.product-item').its('length').should('be.gt', 2);
    });
});