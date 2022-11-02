///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq','http://localhost:3000/')
    })
  
    it('verify tabs of the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="Hotels"]').should("be.visible")
        cy.get('[data-cy="Car"]').should('be.visible')
        cy.get('[data-cy="Flight"]').should('be.visible')
     })

     it('verify text of the page', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="Hotels"]').should("have.text","hotels")
      cy.get('[data-cy="Car"]').should('have.text',"car")
      cy.get('[data-cy="Flight"]').should('have.text',"flight")
   })

     it('verify address box', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
    cy.contains('Going to').should('be.visible')
    cy.get('[name="address"]').should('be.visible')
    })

    it('verify Check-in box', () => {
      cy.visit('http://localhost:3000')
      cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
      cy.get('[id="input-start"]').should('be.visible')
      })

    it('verify Check-out box', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
        cy.get('[id="input-end"]').should('be.visible')
        })
      
        it('verify Travelers list', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
        cy.get('#info').should("be.visible")
        //cy.get('[class="dropdown-select show"]').should("not.be.visible")
        cy.get(':nth-child(1) > .name').should("not.be.visible")
        cy.get(':nth-child(2) > .name').should("not.be.visible")
        })

        it('verify elements of Hotels tab', () => {
          cy.visit('http://localhost:3000')
          cy.get('[data-cy="flight_chk"]').should("be.visible")
          cy.get('[data-cy="cars_chk"]').should('be.visible')
          //cy.get('#tab1 > form > .btn-submit').should('be.visible')
          
          cy.get('[type=submit]').should('be.visible')
       })
  

    })   
