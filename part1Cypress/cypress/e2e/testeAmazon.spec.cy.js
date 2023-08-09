describe('testes'   , () => {

    beforeEach(()=>{
        cy.visit('https://www.amazon.com.br/')
    })

    it('criando cadastro', () => {
        cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').type('TesteNome')
        cy.get('#ap_email').type(44991137884)
        cy.get('#ap_password').type('abcteste14748*')
        cy.get('#ap_password_check').type('abcteste14748*')
        cy.get('#continue').click()


      })
})