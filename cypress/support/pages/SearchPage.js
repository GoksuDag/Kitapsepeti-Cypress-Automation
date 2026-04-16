class SearchPage {
    elements = {
        searchInput: () => cy.get('#live-search'),
        resultsContainer: () => cy.get('#product-list, .row.mb-2'),
        productCards: () => cy.get('.product-item, .box.col-12').filter(':visible'),
        sortSelect: () => cy.get('select[id*="sort"], .sort-select, #select-sort').first(),
        filterPanel: () => cy.get('[id*="filter"], [class*="filter"], [id*="facet"]'),
        categoryLink: () => cy.get('a').contains(/ROMAN|EDEBİYAT/i).first()
    }
    searchProduct(productName) {
        this.elements.searchInput()
            .should('exist')
            .clear({ force: true })
            .type(`${productName}{enter}`, { force: true });
    }
}
export default new SearchPage();