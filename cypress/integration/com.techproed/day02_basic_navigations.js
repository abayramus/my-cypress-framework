describe('navigations',()=>{
    it.skip('back, forward, refresh',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        // hard wait of cypress
        cy.wait(3000)

        //clicking on the login link
        cy.contains('Log in').click();
        cy.wait(3000)

        //Going back to the previous page
        // cy.go('back')
        //OR
        cy.go(-1)
        cy.wait(3000)

        //Going to the next page
        // cy.go('forward')
        cy.go(1)
        cy.wait(3000)

        //Refresh the page using reload
        cy.reload() 
        
    })

    it('chaining the navigations',()=>{
         //WE CAN CHAIN THE FUNCTION
         cy.visit('https://qa-environment.crystalkeyhotels.com/');

         //chaining the methods
         cy
         .contains('Log in')
         .click()
         .go('back')
         .go('forward')
         .go('back');


         //forcing to reload. Note that we do not need to force here
         //And verify the Log in link is visible
         cy
         .reload(true)//true means force
         .contains('Log in')//getting the Log in element
         .should('be.visible')//asserting if the element is visible 

    })
})