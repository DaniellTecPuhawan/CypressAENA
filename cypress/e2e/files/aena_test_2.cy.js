
describe('Checking 200 response', () => {

    it('Visit', () => {
        
      cy.wait(2500)

      cy.visit('https://serviciosvip-empresas.aena.es/empresas/es', { timeout: 10000 }); //Access to the web and add timeout of 10 sec

      cy.wait(2500)

      cy.request('https://serviciosvip-empresas.aena.es/empresas/es') //Check HTTP status

        .its('status') // If the status

        .should('eq', 200); //Check if is 200

    });
  });
  