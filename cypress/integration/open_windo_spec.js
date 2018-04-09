describe('window open', function () {

  beforeEach(function () {
    cy.visit('http://1.1.14.112:8081', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('windowOpen')
      }
    })
  })

  it('see window open being called with url', function () {
    cy.get('#open-window').click()


    cy.get('@windowOpen').should('be.calledWith', 'https://fullintegration-testing.appspot.com/')
  })

  it('checked open window',function(){
      cy.viewport(1440,900)
      cy.visit('https://fullintegration-testing.appspot.com/')
        cy.get('#userName').type('nithya.vadivel@anywhere.co')
        cy.get('#password').type('nithya9940{enter}')


  })
})
