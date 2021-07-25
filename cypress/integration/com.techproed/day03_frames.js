// import 'cypress-iframe';
describe('iframes',()=>{
    it('handeling iframes',()=>{
        /*iframes:
        frames are pages within a page
        there are multiple html tag in a single page

        1.install plugin : 
         LINK: https://www.npmjs.com/package/cypress-iframe
         RUN ON TERMINAL : npm install -D cypress-iframe
        2. IMPORT PACKAGE IN THE CLASS : import 'cypress-iframe';
        WE CAN USE import 'cypress-iframe'; INSIDE THE 

        3. cy.frameLoaded('CSS OF THE FRAME');

        4. Once we are inside the the frame, we need to use below sysntax to find element
        cy.iframe().find('CSS OF ELEMENT')
         */

        cy.visit('https://the-internet.herokuapp.com/iframe')

        //ASSERTING THE TEXT
        cy.get('h3').should('contain.text','Editor')

        //Switching the iframe element
        //#mce_0_ifr is the css locator of the frame
        cy
        .frameLoaded('#mce_0_ifr');

        cy
        .iframe()//We need to use iframe() when we are inside the iframes
        .find('p')//use find() to locate the element inside the frame
        .clear()//clearing the element

        cy
        .iframe()
        .find('p')
        .type('Inside the iframe') 

        //WORKING OUTSIDE OF THE FRAME
        //Cypress automatically handles element athtais outside of the frame
         //ASSERTING THE TEXT
         cy
         .get('h3')
         .should('contain.text','Editor')

         //clicking on the Elemental Selenium
         cy
         .contains('Elemental Selenium')
         .click()


    })
})