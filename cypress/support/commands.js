Cypress.Commands.add('addStyle', (styleString) => {
    cy.document().then((doc) => {
        const style = doc.createElement('style');
        style.textContent = styleString;
        doc.head.append(style);
    });
});
Cypress.Commands.add('cleanUI', () => {
    const style = `
        .ins-preview-wrapper, .modal-backdrop, .modal, 
        #ub-content-2638, .cookie-policy, .m-bottom-right,
        .nb-interstitial-overlay, #ins-frameless-overlay,
        [class*="interstitial"], [id*="ins-"] { 
            display: none !important; 
            visibility: hidden !important;
            pointer-events: none !important;
        }
    `;
    cy.addStyle(style);
});