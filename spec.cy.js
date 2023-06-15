describe('Teste - sistema aluno online', () => {
  it('Novo requerimento - AL', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select("ADS038 - Governança de TI")
    cy.get('#inputProva').select("A1")
    cy.get('#inputArgumentacao').type("Me da 10 pontos!!!") /*😁*/
    cy.get('.btn-danger').click()
  }),

    it('Novo requerimento - Desistir', () => {
      cy.visit('http://localhost:3000/requerimentos')
      cy.get('.btn').click()
      cy.get('#inputDisciplina').select("ADS038 - Governança de TI")
      cy.get('#inputProva').select("A1")
      cy.get('#inputArgumentacao').type("Me da 10 pontos!!!") /*😁*/
      cy.get('.btn-light').click()
    }),

    it('Novo requerimento - Teste Vazio', () => {
      cy.visit('http://localhost:3000/requerimentos')
      cy.get('.btn').click()
      cy.get('#inputDisciplina').select("ADS038 - Governança de TI") /*😁*/
      cy.get('.btn-light').click()
    })
})