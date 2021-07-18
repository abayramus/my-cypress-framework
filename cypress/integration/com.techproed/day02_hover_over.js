describe('move over',()=>{
    it('move over',()=>{
        cy.visit('https://www.amazon.com/')

        cy
        .get('.icp-nav-link-inner')//getting the element 
        .trigger('mouseover')//moving the mouse over

        cy.wait(3000)

        /*Test Case
        click on Change country/region
        select Canada from the dropdown
        */
       //click on Change country/region
       cy
       .contains('Change country/region')
       .click()

       //select Canada from the dropdown
       cy
       .get('#icp-selected-country')
       .select('Canada',{ force: true })
    })
})