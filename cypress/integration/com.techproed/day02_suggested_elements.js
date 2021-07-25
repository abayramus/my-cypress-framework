describe('suggested elements',()=>{
    it('suggested elements',()=>{
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('usa')
        cy.wait(3000)
        cy
        .get('li span b')//getting the list of bold items
        .contains('map')//choosing the one that contains map
        .click()//then clicking on it

        /*li span b :
        map
        a login
        jobs
        today
        a customer service

        */
    })

    
  
    it('automation practice . com ',()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.get("input[id='search_query_top']").type('dress')
        cy.wait(5000)
        // METHOD 1 is locate the one of the suggested option
        //Then click on it
        // cy
        // .get('.ac_results > ul > :nth-child(2)')
        // .click()


        //METHOD 2 is to use contains
        //and click on it
        cy
        .get('.ac_results')//Summer Dresses > Printed Summer,Evening Dresses > Printed ,Summer Dresses > Printed Summer ,..
        .contains('Blouse')//Click on the 1st element if there are multiple match
        .click()  
        cy.wait(5000)
        
        //Assertion
        cy
        .get("h1[itemprop='name']")
        .should('be.visible')
    })
})