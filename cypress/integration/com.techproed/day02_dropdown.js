describe('dropdown',()=>{
    it('dropdown test',()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.wait(2000)
        //cypress uses select method to select from a dropdown
        
        //1. locate the dropdown element
        //2. use select method to select the option
        
        // cy
        // .get('#dropdown')
        // .select('Option 1')
        // cy.wait(2000)

        cy
        .get('#dropdown')//location the dropdown element
        .select('Option 1')//selecting Option 1
        .should('have.value','1')//selected value = 1
        cy.wait(2000)

        //selecting option 2
        cy
        .get('#dropdown')//location the dropdown element
        .select('Option 2')//selecting Option 2
        .should('have.value','2')//selected value = 2
    })
    
})