describe('custom method', ()=>{

    it('log in',()=>{
        // login is the custom method that is inside the commands.js
        //when we add a function in commands.js
        //it will be accessable in the entire framewrok automatically
        cy.login('cdef!@gmail.com','12345')
    })
})