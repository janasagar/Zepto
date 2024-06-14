class Add_to_Cart{//add to cart class
    
    adding(item){ //adding items to cart
        cy.xpath(item).click();//xpath selector will be mention test script
        
    }
    removeitem(selectitem){//remove item from cart
        cy.xpath("//i[@class='fa-solid fa-cart-shopping']").click({force:true})
        cy.xpath(selectitem).click()//xpath selector will be mention test script
    }
    addquantity(selectitem){//adding quantity of any item
        cy.xpath("//i[@class='fa-solid fa-cart-shopping']").click({force:true})
        cy.xpath(selectitem).click()//xpath selector will be mention test script

    }
    
}
export default Add_to_Cart