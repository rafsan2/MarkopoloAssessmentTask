export class DemoBlazeHomePage{

    //Registration Flow
    signUp = '#signin2'
    signUpUsername = '#sign-username'
    signUpPassword = '#sign-password'
    signUpButton = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    //Product Interactions
    product = ':nth-child(2) > .card > .card-block > .card-title > .hrefch'
    cart = '#cartur'

    //Shopping Cart Flow
    home = '.active > .nav-link'
    secondroduct = ':nth-child(3) > .card > .card-block > .card-title > .hrefch'
    thirdProduct = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'

    navigate(url: string){
        cy.visit(url)
    }

    //User Registration Flow
    clickSignUp(){

        cy.get(this.signUp)
        .click()
        .wait(5000)

    }

    enterUsername(username:string){

        cy.get(this.signUpUsername)
        .type(username)   
        .wait(2000) 

    }

    enterPassword(password:string){

        cy.get(this.signUpPassword)
        .type(password)
        .wait(2000)

    }

    clickSignUpButton(){

        cy.get(this.signUpButton)
        .click()
        .wait(2000)

    }

    //Product Interactions
    clickProduct(){

        cy.get(this.product)
        .click()
        .wait(2000)

    }

    clickCart(){
        cy.get(this.cart)
        .click()
        .wait(3000)
    }

    //Shopping Cart Flow
    clickHome(){

        cy.get(this.home)
        .click()
        .wait(2000)

    }

    clickSecondProduct(){

        cy.get(this.secondroduct)
        .click()
        .wait(2000)

    }

    clickThirdProduct(){

        cy.get(this.thirdProduct)
        .click()
        .wait(2000)

    }



}