describe('File Upload',()=>{
    it('single file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')


        // cy.get('#filesToUpload')
        // .attachFile('image1.jpeg')
        //OR

        //path of image1
        const path1='image1.jpeg'

        cy.get('#filesToUpload')
        .attachFile(path1)

         //Assertion
         cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it.only('multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //path of all images
        const path1='image1.jpeg'
        const path2='image2.jpeg'
        const path3='image3.jpeg'

       //This will override the previous files
       //Below will keep the last file only
        cy.get('#filesToUpload')
        .attachFile(path1)
        .wait(3000)
        .attachFile(path2)
        .wait(3000)
        .attachFile(path3)
       
        //Assertion
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })


    it('Uploading multiple files',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
 

        // cy.get('#filesToUpload')
        // .attachFile(['image1.jpeg','image2.jpeg', 'image3.jpeg']);
        //OR

        //path of all images
        const path1='image1.jpeg'
        const path2='image2.jpeg'
        const path3='image3.jpeg'
        //Overriding original file name:
        //.attachFile({ filePath: 'FILE PATH', fileName: 'FILE NAME' });
        //This will NOT override previous files. It will upload them all
        cy.get('#filesToUpload')
        .attachFile([path1, path2, path3]);
        
        //Assertion
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })


    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //path of all images
        const path1='image1.jpeg'

        //Overriding original file name:
        //.attachFile({ filePath: 'FILE PATH', fileName: 'FILE NAME' });
        cy.get('#filesToUpload')
        .attachFile({ filePath: path1, fileName: 'customFileName.json' });
        
        //Assertion
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })
    
})