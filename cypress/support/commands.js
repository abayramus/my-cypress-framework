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