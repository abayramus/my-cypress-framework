describe('Search',()=>{
    it('amazon search',()=>{
        //amazonSearch('teapot') comes from the commends.js
     cy.amazonSearch('teapot')  

    
     cy.get('.a-color-state').should('have.text','"teapot"')
     
     cy.title().should('include','teapot')

    })
})