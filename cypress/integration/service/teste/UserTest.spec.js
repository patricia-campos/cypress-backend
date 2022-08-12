import UserService from '../requests/UserService.request'
const userService = new UserService;

const payloadAddUser = require('../payload/Add-user.json')
const payloadEditUser = require('../payload/Edit-user.json')


//=========================================================================================================

context('Users', () => {

//=========================================================================================================

      it('GET - Consultar Usuários COM SUCESSO', () => {

        userService.getAllUsers().as('response')        

        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
           expect(response.body).to.be.not.null;
         })
                                   
      });

      //=================================================================================================== 

      it('GET - Consultar Usuários por Id COM SUCESSO', () => {

        const idUser = 50;

        userService.postUser(payloadAddUser).as('response')

        cy.get('@response').should((response) => {
           expect(response.status).to.eq(200);
           expect(response.body.id).to.eq(50);
           expect(response.body.userName).to.eq('Coraline');
           expect(response.body.password).to.eq('123');
         })

        userService.deleteUser(idUser).as('response')  
                                   
      });
      
      //===========================================================================================

      it('POST - Adicionar um novo usuário COM SUCESSO', () => {

        const idUser = 50;

        userService.postUser(payloadAddUser).as('response')
          
        cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(50);
          expect(response.body.userName).to.eq('Coraline');
          expect(response.body.password).to.eq('123');

        })

          userService.deleteUser(idUser).as('response')  
                                             
        });

      //===========================================================================================

       it('DELETE - Deletar  usuário COM SUCESSO', () => {

        const idUser = 50;

        userService.postUser(payloadAddUser).as('response')

        userService.deleteUser(idUser).as('response') 
          
        cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);
        })

        });

      //===========================================================================================
            
       it('PUT - Alterar usuário COM SUCESSO', () => {

        const idUser = 50;

        userService.putUser(payloadEditUser,idUser).as('response') 
          
        cy.get('@response').should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.userName).to.eq('Coraline Jones');
          expect(response.body.password).to.eq('123456');
          })

        userService.deleteUser(idUser).as('response')  
                                               
       });
                  
});