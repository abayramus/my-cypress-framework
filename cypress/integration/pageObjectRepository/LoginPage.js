class LoginPage{
    getUserNameBox(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    getPasswordBox(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    getLoginButton(){
        return cy.get('.MuiButton-label')
    }

    getWelcomeText(){
        return cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        
    }

    getNavbarHeader(){
        return cy.get('.header__nav')
    }
}

export default LoginPage; 