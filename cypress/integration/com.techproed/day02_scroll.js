describe('scroll',()=>{
    /* scrollIntoView()
    https://docs.cypress.io/api/commands/scrollintoview
    To scroll into the element 
    1. Locate the element you want to scrooll
    2. Use scrollIntoView()
    */
    it('scroll into view',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.wait(2000)

        //Scrolling down to 'Our Rooms' element
        cy
        .get('.col-md-7 > .mb-4')
        .scrollIntoView();  
        
        //scrolling to recent blogs
        cy.wait(2000)
        cy
        .get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        .scrollIntoView()
        
        //Scrolling to check in date
        cy.wait(2000)
        cy
        .get(':nth-child(1) > .form-group > .wrap > label')
        .scrollIntoView()

        // scrollTo(x, y)
        cy.wait(2000)
        cy
        .scrollTo(0, 1000)//scrolling 1000 px down
        cy.wait(2000)
        cy
        .scrollTo(0, -500)//scrolling 500 px up
      
   /* scrollTo()
   https://docs.cypress.io/api/commands/scrollto#Syntax
    1. we do not scroll on an element
    We scroll a certain amount (pixel or percent)
    */
    })
})