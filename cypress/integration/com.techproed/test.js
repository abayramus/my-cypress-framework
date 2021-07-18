describe ('alers',()=>{
    
    //cypress handles alert automaticaly
     it.skip('auto accept', ()=>{
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.wait(3000)
         cy.get("button[onclick='jsAlert()']").click()//this will clcik on the button and automatically accept. 
         cy.wait(3000)
         cy.get('#result').should('have.text','You successfully clicked an alert')

     })

     //cypress handles alert automaticaly
     it.skip('succested element clicks', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(":nth-child(3) > button").click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })

         //cypress handles alert automaticaly
         it.skip('auto accept and get text', ()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.wait(3000)
            cy.get("button[onclick='jsConfirm()']").click()
            cy.wait(3000)
            //cypress can control the DOM elements and Browser Events
            //We can control the browser events using on function. This is a jquery function

            //on function takes two parameter: 1st pameter is the event, 2nd parameter is the function
            //The event to capture windows alert is window:alert 
            //the function is captute the text as string and then compare with expected value

            //We only use this when we want ot get the alert text and verify.
            // Here window is the object alert it action or method
            cy.on('window:alert',(str) => {
                expect(str).to.equal('I am a JS Confirm')//geting the text aas str and comporing
                // expect(str).to.contains('I am a JS Confirm')//geting the text aas str and comporing
                // expect(str).to.eq('I am a JS Confirm')//geting the text aas str and comporing
            })

            cy.get('#result').should('have.text','You clicked: Ok')
   
        })


               //cypress handles alert automaticaly
               it.skip('Click cancel', ()=>{
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
           
                //We will not confirm. TO do this we will manupilate the window
                cy.on('window:confirm',(str) => {
                   return false
                })
                cy.wait(3000)
                cy.get("button[onclick='jsConfirm()']").click()
                cy.wait(3000)
    
                cy.get('#result').should('have.text','You clicked: Cancel')
    
            })



              //cypress handles alert automaticaly
               it.only('Type', ()=>{
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
           
                //We will not confirm. TO do this we will manupilate the window
                cy.window().then( ($windowElement) => {
                    cy.stub($windowElement,'prompt').returns('Hi')
                    cy.wait(3000)
                    cy.get("button[onclick='jsPrompt()']").click()
                    cy.wait(3000)

                })
    
                cy.get('#result').should('have.text','You entered: Hi')
    
            })




 })