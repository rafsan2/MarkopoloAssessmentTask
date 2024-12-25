import { DemoBlazeHomePage } from "../pageobjectmodel/dmb_home_page"  

const dmbHOmePage = new DemoBlazeHomePage()


describe('User Registration Flow', () => {
  it('Verify a new user can be registered with valid username & password', () => {

    cy.visit('https://www.demoblaze.com/')

    //Asserted the home page body
    cy.get('body')
    //maximaize window size
    cy.viewport(window.screen.width, window.screen.height)
    .wait(2000)

    //Implicit Assertion for DemoBlaze home page
    cy.get('.active > .nav-link')
    .should('contain', 'Home')
    .wait(1000)

    cy.get(':nth-child(2) > .nav-link')
    .should('contain', 'Contact')
    .wait(1000)

    cy.get(':nth-child(3) > .nav-link')
    .should('contain', 'About us')
    .wait(1000)

    cy.get('#cartur')
    .should('contain', 'Cart')
    .wait(1000)

    cy.get('#login2')
    .should('contain', 'Log in')
    .wait(1000)

    cy.get('#signin2')
    .should('contain', 'Sign up')
    .wait(1000)


    dmbHOmePage.clickSignUp()
    //Assertion for Sign Up Modal
    cy.get('#signInModalLabel')
    .should('have.text', 'Sign up')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    .should('be.visible')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label')
    .should('have.text', 'Username:')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label')
    .should('have.text','Password:')    

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    .should('have.text', 'Sign up')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    .should('have.text', 'Close')   

    dmbHOmePage.enterUsername('TestUserG')
    dmbHOmePage.enterPassword('Qa_123456')
    dmbHOmePage.clickSignUpButton()

    cy.on("window:alert", (alertMessage) => {
      //verify text on pop-up
      expect(alertMessage).to.equal("Sign up successful.");
   });

  })

  it('Verify users can NOT be registered with duplicate username & new password', () => {

    cy.visit('https://www.demoblaze.com/')
    cy.viewport(window.screen.width, window.screen.height)
    .wait(2000)

    dmbHOmePage.clickSignUp()
    dmbHOmePage.enterUsername('TestUserD')
    dmbHOmePage.enterPassword('Qa_123456')
    dmbHOmePage.clickSignUpButton()

    cy.on("window:alert", (alertMessage) => {
      //verify text on pop-up
      expect(alertMessage).to.equal("This user already exist.");
   });

  })

  it('Verify users can NOT be registered with without password', () => {

    cy.visit('https://www.demoblaze.com/')
    cy.viewport(window.screen.width, window.screen.height)
    .wait(2000)

    dmbHOmePage.clickSignUp()
    dmbHOmePage.enterUsername('TestUserD')
    dmbHOmePage.clickSignUpButton()

    cy.on("window:alert", (alertMessage) => {
      //verify text on pop-up
      expect(alertMessage).to.equal("Please fill out Username and Password.");
   });

  })


})