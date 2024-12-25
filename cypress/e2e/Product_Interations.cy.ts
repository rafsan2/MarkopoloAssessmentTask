import { DemoBlazeHomePage } from "../pageobjectmodel/dmb_home_page" 
import { DemoBlazeProductDetailsPage } from "../pageobjectmodel/product_details_page"
import { DemoBlazeCartPage } from "../pageobjectmodel/cart_page"

const dmbHOmePage = new DemoBlazeHomePage()
const dmbProductDetailsPage = new DemoBlazeProductDetailsPage()
const dmbCartPage = new DemoBlazeCartPage()

describe('Product Interactions', () => {
    it('Verify user is redirected to product details page when a product is clicked', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()

        //Verifying product details page with assertion
        cy.get('.name')
        .should('have.text', 'Nokia lumia 1520')

        cy.get('.col-sm-12 > .btn')
        .should('have.text', 'Add to cart')

        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });
  
    })

    it('Verify product is added to cart from product details page when "Add to cart" button is clicked', () => {

        cy.visit('https://www.demoblaze.com/')

        cy.viewport(window.screen.width, window.screen.height)
        .wait(3000)

        dmbHOmePage.clickProduct()
        dmbProductDetailsPage.clickAddToCartButton()

        cy.on("window:alert", (alertMessage) => {
            //verify text on pop-up
            expect(alertMessage).to.equal("Product added");
         });
  
    })

    it.only('Verify product is removed from cart when "Delete" is clicked', () => {

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

         //Asserting Cart page is displayed
         cy.get('.col-lg-8 > h2')
         .should('have.text', 'Products')
         .wait(2000)

         cy.get('.success > :nth-child(2)')
         .should('have.text', 'Nokia lumia 1520')
         .wait(2000)

         cy.get('.success > :nth-child(4) > a')
         .should('have.text', 'Delete')
         .wait(2000)

         dmbCartPage.clickDelete()
         

  
    })
  
  
  })