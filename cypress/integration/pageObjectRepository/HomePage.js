class HomePage {
    getSigninLink(){
        return cy.contains('Sign In')
    }
}

export default HomePage;