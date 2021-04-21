function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


describe('Registration', () => {
    beforeEach(() => {
        cy.visit('http://practice.automationtesting.in/my-account/')
    })
    it('As a guest I want to register an account to have access to the website', () => {
        cy.get('#reg_email').type(uuidv4()+'test@test.io')
        cy.get('#reg_password').type('sfdgfhgjklj;koilukytredgfchgvhbhjiu8976iytghbjnm,')
        cy.get('[name=register]').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/my-account/')
    })

    it('Guest forgot to input password', () => {
        cy.get('#reg_email').type(uuidv4()+'test@test.io')
        cy.get('[name=register]').click()
        cy.get('[class="woocommerce-error"]').contains('Error: Please enter an account password.')
    })
});


