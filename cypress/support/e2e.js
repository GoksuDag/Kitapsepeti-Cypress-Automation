import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
beforeEach(() => {
    cy.addStyle(`
        .ccp---nb-interstitial-overlay, 
        .ccp---nb-terminate, 
        #onesignal-slidedown-container,
        .modal-backdrop { 
            display: none !important; 
            visibility: hidden !important; 
            pointer-events: none !important; 
        }
    `);
});