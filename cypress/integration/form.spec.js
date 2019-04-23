describe('Testing WebApp Form page', function(){
    it("successfully loads the form page", function(){
        cy.visit("http://localhost:8080/form.jsp")
    })
    it("successfully selects all values in the form", function(){
        cy.get('[type="text"]').type("TESTING")
        cy.get('[value="white"]').check().should('be.checked')
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[type="submit"]').click()
        cy.get('[name="charRev"]').should('have.value',"TESTING")
        cy.get(':nth-child(4) > div').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[name="agrRev"]').should('have.value', "agree")
    })
})