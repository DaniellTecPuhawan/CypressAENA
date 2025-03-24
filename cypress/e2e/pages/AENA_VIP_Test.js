class AENA_VIP_Test {
  
  constructor() {
    this.selectors = { 
      clickLogin: '.header__top__nav__links__item--session a',
      usernameInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-textbox > input', 
      passwordInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-password > input',
      submitButton: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-submit.is-centered.is-aena-green-button' 
    };

    this.loginUrl = "https://usuarios.aena.es/?gig_ssoToken=eu1_tk1.gkWvG0nRqrD4Dznie5xyFT30O6mFLAvQ29WWBAlEBY4&gig_originSite=serviciosVIP&gig_lang=es";
  }

  navigate() { 
    cy.viewport(1280, 720); 
    cy.clearCookies(); // Elimina las cookies
    cy.clearLocalStorage(); // Elimina el localStorage
    cy.visit('https://serviciosvip.aena.es/vip/es', { failOnStatusCode: false }); 
    cy.wait(5000); // Espera para que cargue la página
  }

  clickLogin() { 
    cy.visit(this.loginUrl, { failOnStatusCode: false }); // Redirige manualmente
    cy.wait(3000);
  }

  enterUsername(username) { 
    cy.wait(3000);
    cy.get(this.selectors.usernameInput) // Aquí estaba el error
      .should('be.visible') // Asegura que el input está visible antes de escribir
      .type(username); 
  } 

  enterPassword(password) { 
    cy.wait(3000);
    cy.get(this.selectors.passwordInput)
    //.should('be.visible')
    .type(password); 
    
  } 

  submitButton() {
    cy.get(this.selectors.submitButton).click();
    cy.wait(5000);
    cy.clearCookies(); // Elimina las cookies
    cy.clearLocalStorage(); // Elimina el localStorage
  }


}

module.exports = new AENA_VIP_Test();
