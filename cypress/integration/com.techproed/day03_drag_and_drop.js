describe('drag and drop',()=>{
    it('double click',()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#dblClkBtn').dblclick()
        // cy.get('#dblClkBtn').rightclick()

        cy.on('window:alert',(str)=>{
            //All below assertions are valid
            expect(str).to.equal('hi, JavaTpoint Testing')//asserting the text equals: hi, JavaTpoint Testing
           
            expect(str).to.eq('hi, JavaTpoint Testing')//geting the text as str and comparing
           
            expect(str).to.contains('hi, JavaTpoint Testing')//geting the text as str and comparing
             
        })
    })

    it('drag and drop',()=>{
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