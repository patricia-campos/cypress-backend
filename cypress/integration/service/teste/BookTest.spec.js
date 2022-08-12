import BookService from '../requests/BookService.request'
const bookService = new BookService;

const payloadAddBook = require('../payload/Add-book-1.json')
const payloadAddBook2 = require('../payload/Add-book-2.json')


//=========================================================================================================

context('Books', () => {

//=========================================================================================================

      it('GET - Consultar Livros', () => {

        bookService.getAllBook().as('response')

        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
           expect(response.body).to.be.not.null;
         })
                                   
      });

    //===================================================================================================

    it('GET - Consultar Livro por ID', () => {

       const idBook = 230;

       bookService.postBook(payloadAddBook).as('response')

       cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(230);
          expect(response.body.title).to.eq('Testes');
          expect(response.body.description).to.eq('Testes');
          expect(response.body.excerpt).to.eq('Testes automatizados')
        })

        bookService.deleteBook(idBook).as('response') 
                                 
    });

    //===================================================================================================
      
      it('POST - Adicionar um novo livro', () => {

        const idBook = 230; 

        bookService.postBook(payloadAddBook).as('response')
          
        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
           expect(response.body.id).to.eq(230);
           expect(response.body.title).to.eq('Testes');
           expect(response.body.description).to.eq('Testes');
           expect(response.body.excerpt).to.eq('Testes automatizados')
          })

        bookService.deleteBook(idBook).as('response')    
                                             
      });

      //===================================================================================================

       it('DELETE - Deletar  livro', () => {

        const idBook = 230;

        bookService.postBook(payloadAddBook).as('response')

        bookService.deleteBook(idBook).as('response') 
          
        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
          })
                                    
       });

      //=================================================================================================== 

       it('PUT - Alterar livro', () => {

        const idBook = 230;

        bookService.putBook(payloadAddBook2,idBook).as('response') 
          
        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
          })
                                             
       });
                  
});