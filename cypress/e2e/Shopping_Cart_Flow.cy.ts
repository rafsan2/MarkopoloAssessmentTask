import { DemoBlazeHomePage } from "../pageobjectmodel/dmb_home_page" 
import { DemoBlazeProductDetailsPage } from "../pageobjectmodel/product_details_page"
import { DemoBlazeCartPage } from "../pageobjectmodel/cart_page"
import { DemoBlazePlaceORderModal} from "../pageobjectmodel/place_order_modal"

const dmbHOmePage = new DemoBlazeHomePage()
const dmbProductDetailsPage = new DemoBlazeProductDetailsPage()
const dmbCartPage = new DemoBlazeCartPage()
const dmpPlaceOrderModal = new DemoBlazePlaceORderModal()

describe('Shopping Cart Flow', () => {
    it('Verify multiple items can be added to cart when "Add to cart" button is clicked individualy for each items', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()
        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        dmbHOmePage.clickHome()
        dmbHOmePage.clickSecondProduct()
        dmbProductDetailsPage.clickAddToCartButton()
        
        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        dmbHOmePage.clickHome()
        dmbHOmePage.clickThirdProduct()
        dmbProductDetailsPage.clickAddToCartButton()
        
        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()
  
    })

    it('Verify cart total is displayed in Cart page as per each product pricing', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()
        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        dmbHOmePage.clickHome()
        dmbHOmePage.clickSecondProduct()
        dmbProductDetailsPage.clickAddToCartButton()
        
        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        dmbHOmePage.clickHome()
        dmbHOmePage.clickThirdProduct()
        dmbProductDetailsPage.clickAddToCartButton()
        
        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        cy.get('#totalp')
        .should('be.visible')
        
  
    })

    it('Verify purchasing can be completed after adding items to cart', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()
        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        cy.get('#totalp')
        .should('be.visible')

        dmbCartPage.clickPlaceOrderButton()

        //Asserting the place order modal items
        cy.get('#orderModalLabel')
        .should('have.text', 'Place order')
        
        cy.get('#totalm')
        .should('be.visible')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label')
        .should('have.text', 'Name:')
        .wait(1000)

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label')
        .should('have.text', 'Country:')
        .wait(1000)
        
        cy.get(':nth-child(4) > .form-control-label')
        .should('have.text', 'City:')

        cy.get(':nth-child(5) > .form-control-label')
        .should('have.text', 'Credit card:')
        
        cy.get(':nth-child(6) > .form-control-label')
        .should('have.text', 'Month:')

        cy.get(':nth-child(7) > .form-control-label')
        .should('have.text', 'Year:')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .should('have.text', 'Purchase')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
        .should('have.text', 'Close')

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header > .close > span')
        .should('be.visible')

        dmpPlaceOrderModal.typeName('Test001')
        dmpPlaceOrderModal.typeCardNumber('3344')
        dmpPlaceOrderModal.clickPurchaseButton()
  
    })

    it.only('Verify order is confiremd after purchase is completed', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()
        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });

        dmbHOmePage.clickCart()

        cy.get('#totalp')
        .should('be.visible')

        dmbCartPage.clickPlaceOrderButton()
        dmpPlaceOrderModal.typeName('Test001')
        dmpPlaceOrderModal.typeCardNumber('3344')
        dmpPlaceOrderModal.clickPurchaseButton()

        //Verifying order confirmation on success mdal
        cy.get('.sweet-alert > h2')
        .should('have.text', 'Thank you for your purchase!')
  
    })
  
  
  })