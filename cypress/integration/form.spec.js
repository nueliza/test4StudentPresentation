describe('Testing WebApp Form page', function(){
    it("successfully loads the form page", function(){
        cy().visit("http://localhost:8080/form.jsp")
    })
})