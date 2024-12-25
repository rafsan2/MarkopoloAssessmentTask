export class DemoBlazeCartPage{

    //Product Interactions
    delete = '.success > :nth-child(4) > a'

    //Shopping Cart Flow
    placeOrder = '.col-lg-1 > .btn'

    //Product Interactions
    clickDelete(){

        cy.get(this.delete)
        .click()
        .wait(2000)

    }

    //Shopping Cart Flow
    clickPlaceOrderButton(){

        cy.get(this.placeOrder)
        .click()
        .wait(2000)


    }

}