describe('Go to the application',()=>{
    it('Test Case 1', ()=>{
        // visit () => to go to the URL
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //clicking on Log in
        //Finding the elements 
        //whose text includes 'Log in'
        //Then clicking on it
        cy.contains('Log in').click()

        //Verifying if the user is on the Login page
        //I will check if the new url contains /Account/Logon
        cy.url().should('include','/Account/Logon')

    })
})