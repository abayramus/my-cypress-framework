describe('multiple windows',()=>{
    it.only('removing target',()=>{
    cy
    .visit("https://the-internet.herokuapp.com/windows")
    
    //Remove target attribute to open on the same window
    //.invoke('removeAttr','ATTRIBUTE NAME'): removes the attribute from teh element
    cy
    .get('.example > a')//click here element
    .click()

    //ASSERTING THE NEW WINDOW IS OPENED 
    //AND CYPRES CAN WORK IN THAT WINDOW
    cy
    .get('h3')
    .should('have.text','New Window')
    })

    it('opening in the new url',()=>{
        /*
        We will get the value of href
        And store in a variable
        Then open the value in the same window
        prop() to get value of the attribute
        prop() is a jquery method
        since prop is a jquery we use then() to use prop function
         */
        cy
        .visit("https://the-internet.herokuapp.com/windows")
        cy.wait(5000)
        cy
        .get('.example > a')//click here element
        .then((element)=>{
    //getting the value of href attribute
          const newURL =  element.prop('href')
    //opening the URL in the same window      
          cy.visit(newURL)
        })

     //Assertion
        cy
        .get('h3')
        .should('have.text','New Window')   
    })
})