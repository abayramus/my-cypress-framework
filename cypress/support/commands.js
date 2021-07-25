/*This import is to handle iframes
1.install plugin : 
LINK: https://www.npmjs.com/package/cypress-iframe
RUN ON TERMINAL : npm install -D cypress-iframe
2. IMPORT PACKAGE IN THE CLASS : import 'cypress-iframe';
WE CAN USE import 'cypress-iframe'; INSIDE THE commands.js
3. cy.frameLoaded('CSS OF THE FRAME');
import 'cypress-iframe';
*/
import 'cypress-iframe';

/*
for drag and drop we will install plugin:
https://github.com/4teamwork/cypress-drag-drop
RUN: npm install --save-dev @4tw/cypress-drag-drop
 */
import '@4tw/cypress-drag-drop'

/* for file upload */
import 'cypress-file-upload';

/*
-Create a custom method 
-name : login
-parameters (email,password)
-functionality 
    -go to the link
	-click on the Sign in link
	-type email and password
	-click on the sign in button
*/
Cypress.Commands.add('login',(email,password) => {
    cy.visit("http://automationpractice.com/index.php")
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})

/*
Amazon Search custom method: amazonSearch
This method will accept one argument as a product name
Then search for that product
Then click on search button 
*/
Cypress.Commands.add('amazonSearch',(productName) => {
    cy.visit("https://www.amazon.com/")
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()
})



