import React from 'react'
import Home from '../page'

describe('render <Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.get('h1').should('contain', 'Home')
    cy.get('h3').should('contain', 'Shannon Chowdhury')
    cy.get('img').should('have.attr', 'alt', 'Picture of Shannon Chowdhury')
    cy.get('a[href="https://github.com/xeonmobius"]').should('be.visible');
    cy.contains('h1', 'Home').should('be.visible');
    cy.get('img').should('have.attr', 'alt', 'Picture of Shannon Chowdhury');
    cy.contains('h3', 'Shannon Chowdhury').should('be.visible');
    cy.get('a[href="https://www.linkedin.com/in/shannonchowdhury/"]').should('be.visible');
    cy.get('a[href="mailto:shannon.chow@live.com"]').should('be.visible');
    cy.get('a[href="https://twitter.com/Nyonyannyo"]').should('be.visible');
  })
})