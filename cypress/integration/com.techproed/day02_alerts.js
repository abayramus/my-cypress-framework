describe('alerts', () => {
    it('alert Test', () => {
        /*
        Cypress automatically accepts alert when you click on alert button
         */

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy
        .get(':nth-child(1) > button')//clicking on the alert button
        .click()//this automatically accepts the alerts

        //Assert the text is matching:  You successfully clicked an alert

       cy
       .get('#result')//getting the result element
       .should('have.text','You successfully clicked an alert')//asserting if the result text=You successfully clicked an alert

    })


    it('accept alert Test', () => {
        /*
        Cypress automatically accepts alert when you click on alert button
         */
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //clicking the second alrt button
        //by default the alert will be accepted
        cy
        .get(':nth-child(2) > button')
        .click()   
        cy
        .get('#result')
        .should('have.text','You clicked: Ok')
    })
    it.only('dismiss alert Test', () => {
        /*
        Cypress automatically accepts alert when you click on alert button
        With cypress we can control the browser events using on function
        on is a jquery function

         */
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //clicking the second alrt button
        //by default the alert will be accepted
        cy
        .get(':nth-child(2) > button')
        .click()  
        

        // //window(object):confirm(functionality)
        cy.on('window:confirm',(str)=>{
            return false//DEFAULT CYPRESS BEHAVIOUR return true
        })
        //Asserting the result now has You clicked: Cancel
        cy
        .get('#result')
        .should('have.text','You clicked: Cancel')
    })

    it('dismiss alert Test', () => {
        /*
        Cypress automatically accepts alert when you click on alert button
        With cypress we can control the browser events using on function
        on is a jquery function

         */
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //clicking the second alrt button
        //by default the alert will be accepted
    
    })

    it.only('entering text on the alert', () => {
        /*
        Cypress automatically accepts alert when you click on alert button
        We will use window()
         */
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       

        //Controll the promtp
        //type Hi
        //click Ok
        cy
        .window()//to controll the pop up window
        .then(($windowElement)=>{//$windowElement represent the window popup element
           cy
           .stub($windowElement,'prompt')//
           .returns('Hi')//Entering Hi in the prompt

           cy.wait(3000)
           //Click on the 3rd alert
        cy.get(':nth-child(3) > button').click()//After I enter Hi in the prompt, I click on the alert
        })

        //Asserting the result
       cy
        .get('#result')
        .should('have.text','You entered: Hi')
    })

  })