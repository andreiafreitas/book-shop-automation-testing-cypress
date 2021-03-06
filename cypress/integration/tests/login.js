describe('Login', () => {
    it('As a guest I want to be able to login to see my account', () => {
        cy.typeLogin()
        cy.url().should('eq', 'http://practice.automationtesting.in/my-account/')
    })

    it('Logged out customer with incorrect username and password', () => {
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#username').type('incorrecttest@test.io')
        cy.get('#password').type('incorrectpassword1')
        cy.get('[name=login]').click()
        
    })
});