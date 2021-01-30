describe('AndresShop', ()=>{


    it('first cypress test on a webpage,()',()=>{
        cy.visit('http://localhost:8080/busqueda'); //ARRAGE
        cy.get('.jumbotron').get('form')
        cy.get('.ui input').type('iPhone {enter}')
        cy.wait(3000)

        cy.contains('iPhone').get('.btn-outline-success:first').click();
        cy.url().should('include','/producto');//ASSERT
        
    })
})