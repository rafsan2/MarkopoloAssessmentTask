export class DemoBlazeProductDetailsPage{

    addtoCart = '.col-sm-12 > .btn'
    
    clickAddToCartButton(){

        cy.get(this.addtoCart)
        .click()
        .wait(3000)

    }
    
}