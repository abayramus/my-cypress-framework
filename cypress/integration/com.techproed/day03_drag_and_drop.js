import '@4tw/cypress-drag-drop'

describe('drag and drop',()=>{
    it('double click',()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#dblClkBtn').dblclick()
        // cy.get('#dblClkBtn').rightclick()

        cy.on('window:alert',(str)=>{
            expect(str)//getting text on teh alert window
            .to.equal('hi, JavaTpoint Testing')//asserting the text equals: hi, JavaTpoint Testing
        })
    })

    it.only('drag and drop',()=>{
        /*DRAG AND DROP:
        1. RUN ON TERMINAL : npm install --save-dev @4tw/cypress-drag-drop
        2. import '@4tw/cypress-drag-drop'
        */
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        
        //dragging #sourceImage over #targetDiv
        cy
        .get('#sourceImage')//source
        .drag('#targetDiv');//target
    })
})