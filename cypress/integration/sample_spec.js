describe('AndresShop', ()=>{


    it('first cypress test on a webpage,()',()=>{
        cy.visit('http://localhost:8080/busqueda'); //ARRAGE
        cy.get('class="ui input"').type('iPhone {enter}')
        cy.wait(3000)

        cy.contains('iPhone').click();//ACT
        cy.url().should('include','commands/action');//ASSERT
        
    })
})