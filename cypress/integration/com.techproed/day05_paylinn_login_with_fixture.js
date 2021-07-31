describe('PAYLINN', () => {

   before(function(){
    //this is used to access the data that is inside creds.json
    //    cy.fixture('NAME OF THE FILE')
    // promise .then 
       cy.fixture('creds').then(
           function(data) {
            //    this.data is used to access the global data variable
        // i just want to use data variable in the entire class
               this.data=data;
           }
       )
   })
    it('Paylinn login test', function() {
        // going to the application
        cy.visit('https://paylinn.com/')
        //clicking on sign in 
        cy.contains('Sign In').click()
        //entering username
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)
        //Asserting if username is entered in the input box
        //We will verify if the calue attribute has User (this.data.username)

        //<input aria-invalid="true" name="username" type="text" class="MuiInputBase-input MuiInput-input" value="User">
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value',this.data.username)

        //entering password
        cy
        .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)
        //Asserting if username element has teh value of user(this.data.password)
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value',this.data.password)

        // clicking on the sign in button
        cy
        .get('.MuiButton-label')
        .click()
        //verifying the log in successfull
        cy
        .get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text','Welcome')


        //We can do multiple assertion using and keyword
        cy
        .get('.header__nav')
        .should('contain.text','Welcome')
        .and('contain.text','React')
        .and('contain.text','Logout')
        .and('contain.text',this.data.username)//User

    })
  })