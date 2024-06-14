class Add_to_Cart{
    adding(item){
        cy.xpath(item).click();
        
    }
    removeitem(selectitem){
        cy.xpath("//i[@class='fa-solid fa-cart-shopping']").click({force:true})
        cy.xpath(selectitem).click()
    }
    addquantity(selectitem){
        cy.xpath("//i[@class='fa-solid fa-cart-shopping']").click({force:true})
        cy.xpath(selectitem).click()

    }
    
}
export default Add_to_Cart