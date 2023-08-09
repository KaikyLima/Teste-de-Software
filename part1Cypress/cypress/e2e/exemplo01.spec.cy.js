describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.grupointegrado.br/')
  })

  it('validando título principal da página', () => {
    cy.visit('https://www.grupointegrado.br/')
    cy.title().should('be.equal', 'Home - Centro Universitário Integrado')
    cy.get("#__BVID__94__BV_toggle_ > img").click()
  })

  it("Validando as funções da página", () =>{
    cy.visit('https://www.grupointegrado.br/')
    cy.get("#__BVID__94__BV_toggle_ > img").click()
  })

  it("Validando a pesquisa do google....", () =>{
    cy.visit('https://www.google.com')
    cy.title().should('be.equal', 'Google')
    cy.get("#APjFqb").click()
    cy.get("#APjFqb").type('Cypress')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    
  })
})