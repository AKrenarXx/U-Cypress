describe('Find Schwarzenegger', () => {
  it('Wiki', () => {

    // Full HD
    cy.viewport(1920, 1080)
    
    // Wiki page
    cy.visit('https://en.wikipedia.org/wiki/Main_Page') 

    // Search
    cy.get('div.cdx-typeahead-search').type('Schwarzenegger')
    cy.get('button.cdx-button').click()

    // Wikipedia page about Arnold Schwarzenegger?
    cy.url().should('include', '/wiki/Arnold_Schwarzenegger') 
    
  })
})