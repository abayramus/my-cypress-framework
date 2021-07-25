describe('custom method', ()=>{

    it('log in',()=>{
        // login is the custom method that is inside the commands.js
        //when we add a function in commands.js
        //it will be accessable in the entire framewrok automatically
        cy.login('cdef!@gmail.com','12345')
    })

    it.only('negative log in',()=>{
        // login is the custom method that is inside the commands.js
        //when we add a function in commands.js
        //it will be accessable in the entire framewrok automatically
        cy.login('cdef!!@gmail.com','12345')


        //ASSERTIONS
        //assert if page contains Authentication failed.
        cy.contains('Authentication failed.').should('be.visible')

        //assert if url contains controller=authentication
        cy.url().should('include','controller=authentication')
        cy.screenshot()//taking screenshot
    })



})