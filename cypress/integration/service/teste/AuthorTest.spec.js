import AuthorService from '../requests/AuthorService.request'
const authorService = new AuthorService;

const payloadAddAuthor = require('../payload/Add-author.json')
const payloadEditAuthor = require('../payload/Edit-author.json')


//=========================================================================================================

context('Author', () => {

//=========================================================================================================  

      it('GET - Consultar Autores COM SUCESSO', () => {
        
        authorService.getAllAuthors().as('response')        // Chamada service

        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);              // Valida o status 
           expect(response.body).to.be.not.null;            // Valida se o retorno é diferente de nulo
         })
                                   
      });

    //===================================================================================================

      it('GET - Consultar Autores por Id do livro COM SUCESSO', () => {

        const idAuthor = 40;

        authorService.postAuthor(payloadAddAuthor).as('response')  // Adiciona um autor vinculado a um livro

        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);                     // Valida o status 
           expect(response.body.id).to.eq(40);                     // Valida o id do autor
           expect(response.body.idBook).to.eq(50);                 // Valida o id do livro
           expect(response.body.firstName).to.eq('Neil');          // Valida o  nome do autor
           expect(response.body.lastName).to.eq('Gaiman');         // Valida o sobrenome do autor
         })

        authorService.deleteAuthor(idAuthor).as('response')        // Exclui autor 
                                   
      });
      
    //===================================================================================================

     it('GET - Consultar Autores por Id COM SUCESSO', () => {

        const idAuthor = 40;
        
        authorService.postAuthor(payloadAddAuthor).as('response')  // Adiciona um autor vinculado a um livro
        
        cy.get('@response').should((response) => {
            expect(response.status).to.eq(200);                    // Valida o status 
            expect(response.body.id).to.eq(40);                    // Valida o id do autor
            expect(response.body.idBook).to.eq(50);                // Valida o id do livro
            expect(response.body.firstName).to.eq('Neil');         // Valida o  nome do autor
            expect(response.body.lastName).to.eq('Gaiman');        // Valida o sobrenome do autor
        })
        
            authorService.deleteAuthor(idAuthor).as('response')    // Exclui autor   
                                           
            });
              
    //===================================================================================================

      it('POST - Adicionar um novo autor COM SUCESSO', () => {

        const idAuthor = 40;

        authorService.postAuthor(payloadAddAuthor).as('response')   // Adiciona um autor vinculado a um livro
        
        cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);                       // Valida o status
          expect(response.body.id).to.eq(40);                       // Valida o id do autor
          expect(response.body.idBook).to.eq(50);                   // Valida o id do livro
          expect(response.body.firstName).to.eq('Neil');            // Valida o  nome do autor
          expect(response.body.lastName).to.eq('Gaiman');           // Valida o sobrenome do autor
        })
       
        authorService.deleteAuthor(idAuthor).as('response')         // Exclui o autor inserido para teste
                                             
        });

      //===========================================================================================

       it('DELETE - Deletar  autor COM SUCESSO', () => {

        const idAuthor = 40;

        authorService.postAuthor(payloadAddAuthor).as('response')   // Adiciona um autor vinculado a um livro

        authorService.deleteAuthor(idAuthor).as('response')         // Exclui autor
          
        cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);                       // Valida o status
        })

        });

      //===========================================================================================
            
       it('PUT - Alterar autor COM SUCESSO', () => {

        const idAuthor = 40;

        authorService.putAuthor(payloadEditAuthor,idAuthor).as('response')    // Editar usuario 
          
        cy.get('@response').should((response) => {
            expect(response.status).to.eq(200);                               // Valida o status
            expect(response.body.id).to.eq(40);                               // Valida o id do autor
            expect(response.body.idBook).to.eq(50);                           // Valida o id do livro
            expect(response.body.firstName).to.eq('Gaiman,');                 // Valida o  nome do autor
            expect(response.body.lastName).to.eq('Neil');                     // Valida o sobrenome do autor
          })

        authorService.deleteAuthor(idAuthor).as('response')                   // Exclui user 
                                               
       });
                  
});