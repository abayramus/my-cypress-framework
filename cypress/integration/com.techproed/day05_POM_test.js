import HomePage from '../pageObjectRepository/HomePage'
import LoginPage from '../pageObjectRepository/LoginPage'

describe('PAYLINN', () => {

    before(function(){
     //this is used to access the data that is inside creds.json
     //    cy.fixture('NAME OF THE FILE')
     // promise .then 
        cy.fixture('creds').then(
            function(data) {
         //    this.data is used to access the global data variable
         //    i just want to use data variable in the entire class
                this.data=data;
            })
    })
     it('Paylinn login test', function() {

        //Creating page objects
        const homePage = new HomePage();

        //Creating LoginPage object
        const loginPage= new LoginPage();

         // going to the application
         cy.visit(this.data.url)
         //clicking on sign in 
         homePage.getSigninLink().click()
         //entering username
         
         loginPage.getUserNameBox().type(this.data.username)
         //Asserting if username is entered in the input box
         //We will verify if the calue attribute has User (this.data.username)
 
         //<input aria-invalid="true" name="username" type="text" class="MuiInputBase-input MuiInput-input" value="User">
        loginPage.getUserNameBox().should('have.attr','value',this.data.username)
 
         //entering password
         loginPage.getPasswordBox().type(this.data.password)
         //Asserting if username element has teh value of user(this.data.password)
         loginPage.getPasswordBox().should('have.attr','value',this.data.password)
 
         // clicking on the sign in button
         loginPage.getLoginButton().click()
         //verifying the log in successfull
         loginPage.getWelcomeText().should('contain.text','Welcome')
 
 
         //We can do multiple assertion using and keyword
         loginPage.getNavbarHeader()
         .should('contain.text','Welcome')
         .and('contain.text','React')
         .and('contain.text','Logout')
         .and('contain.text',this.data.username)//User
 
     })
   })