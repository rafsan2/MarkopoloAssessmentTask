export class DemoBlazePlaceORderModal{

    //Complete Purchase
    name = '#name'
    card = '#card'
    purchase = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    typeName(name:string){
        cy.get(this.name)
        .type(name)
        .wait(1000)
    }

    typeCardNumber(cardNumber:string){
        cy.get(this.card)
        .type(cardNumber)
        .wait(1000)
    }

    clickPurchaseButton(){
        cy.get(this.purchase)
        .click()
        .wait(2000)
    }

}