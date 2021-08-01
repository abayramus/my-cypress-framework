describe('PAYLINN', () => {
    it('Paylinn login test', () => {
        // going to the application
        cy.visit('https://paylinn.com/')
        //clicking on sign in 
        cy.contains('Sign In').click()
        //entering username
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('User')
        //entering password
        cy
        .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('user')
        //clicking on the sign in button
        cy
        .get('.MuiButton-label')
        .click()
        //verifying the log in successfull
        cy
        .get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text','Welcomee')
    })
  })