describe('Viewports',()=>{
//     ***VievPorts**
// https://docs.cypress.io/api/commands/viewport#Syntax
// This is to test the application in different screen sizes
// mac, ipad, iphone, samsung,...
    it('view with iphone 6',()=>{
        cy.visit('www.amazon.com')
        cy.viewport('iphone-6')
        cy.screenshot();
    })

    it('view with macbook 16',()=>{
        cy.visit('www.amazon.com')
        cy.viewport('macbook-16')
        cy.screenshot();
    })

    it.only('view with certain pixals',()=>{
        cy.visit('www.amazon.com')
        cy.viewport(2000,1000)
        cy.screenshot();
    })
})
