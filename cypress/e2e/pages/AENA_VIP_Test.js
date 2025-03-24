class AENA_VIP_Test {
  
  constructor() {
    this.selectors = { 
      clickLogin: 'body > main > header > div.navigation.navigation--top > div > div > div.col-xs-8.col-sm-8.col-md-8 > div > ul > li.header__top__nav__links__item.header__top__nav__links__item--user.header__top__nav__links__item--session > a',
      usernameInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-textbox > input', 
      passwordInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-password > input'
    };
  }

  navigate() { 
    cy.viewport(1280, 720); 
    cy.visit('https://serviciosvip.aena.es/vip/es'); 
    cy.wait(5000); // Espera para que cargue la página
  }

  clickLogin() { 
    //cy.get('.c-button.c-button--user.c-button--session.div-gigya-login.adobe-analytic-event').click();
    cy.get(this.clickLogin).then(($btn) => {
      const url = 'https://usuarios.aena.es/?gig_ssoToken=eu1_tk1.GLAceNLtBIY5oIcj93hYQYhm4J6HXsujuWojqBb64lQ&gig_originSite=clubCliente';  // URL fija
    
      // Visita la URL directamente, con failOnStatusCode: false
      cy.visit(url, {
        failOnStatusCode: false
      });
      cy.wait(3000);  // Espera 10 segundos para dar tiempo a la carga de la página
    });

  }

  

}

module.exports = new AENA_VIP_Test();
