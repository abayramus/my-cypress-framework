describe('Hooks',()=>{

    before(()=>{
        console.log('BEFORE METHOD')
    })

    beforeEach(()=>{
        console.log('BEFORE EACH METHOD')
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
    })

    after(()=>{
        console.log('AFTER METHOD')
    })

    afterEach(()=>{
        console.log('AFTER EACH METHOD')
        //Verifying if the user is on the Login page
        //I will check if the new url contains /Account/Logon
        cy.url().should('include','/Account/Logon')
        cy.screenshot()
    })

    it('Hooks test', ()=>{    
        cy.contains('Log in').click()
   
    })

})