describe('Finding Elements',()=>{
    it('get method', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click()

        //ASSERTINS:
        //1. Asserting if url includes Logon
        cy.url().should('include','Logon')

        //2. Assert if Log in is visible

        //CSS LOCATORS FOR LOG IN

        //.row > .mb-4
        //h2.mb-4
        //h2[class='mb-4']

        //should('be.visible') : checking if the element is visible 
        cy.get('.row > .mb-4').should('be.visible')


        //Finding total number of links taht is child of li
        //Assert the total is 29

        //  li a => Means give me all link(a) that is child of list item(li)

        // xpath = li//a , css = li a
        cy.get('li a').should('have.length',29)



    })
})