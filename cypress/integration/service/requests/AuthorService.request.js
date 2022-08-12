const API_URL = Cypress.env('API_BASE_URL2')

// Endpoint:
const authors = '/Authors'

export default class AuthorsService {

//=========================================================================================

  getAllAuthors(){
    
    return cy.request({
           method: 'GET',
           url: `${API_URL}${authors}`,
           failOnStatusCode: false,
    })
  }

//=========================================================================================

getAuthorsById(idAuthor){

  return cy.request({
         method: 'GET',
         url: `${API_URL}${authors}/${idAuthor}`,
         failOnStatusCode: false,
    })
  }

//=========================================================================================

getAuthorsByIdBook(idBook){

  return cy.request({
         method: 'GET',
         url: `${API_URL}${authors}/books${idBook}`,
         failOnStatusCode: false,
    })
  }

//=========================================================================================
  
postAuthor(payload){

  return cy.request({
         method: 'POST',
         url: `${API_URL}${authors}`,
         failOnStatusCode: false,
         body: payload
     })
   }

//=========================================================================================

  deleteAuthor(idAuthor){

    return cy.request({
           method: 'DELETE',
           url: `${API_URL}${authors}/${idAuthor}`,
           failOnStatusCode: false,
        })
    }

//=========================================================================================

  putAuthor(payload,idAuthor){

    return cy.request({
           method: 'PUT',
           url: `${API_URL}${authors}/${idAuthor}`,
           failOnStatusCode: false,
           body: payload
        })
    }

}