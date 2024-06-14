import Sign_Up from "../../support/pageObject/signup";
import Log_In from "../../support/pageObject/login";
import Log_Out from "../../support/pageObject/logout";
import Explore_Category from "../../support/pageObject/explore_category";
import Search from "../../support/pageObject/search";
import Paan_Corner from "../../support/pageObject/Paan_corner";
import Add_to_Cart from "../../support/pageObject/add_to_cart";

describe('Zepto Test suit', () => {
    var signup = new Sign_Up();
    it('Sign Up test', () => {

        signup.visit_signup()
        signup.sign_up()
      
    });
var login= new Log_In();
it.skip('Log in test', () => {
    
    login.visit_login();
    login.log_in()
    
});
var logout = new Log_Out();
it.skip(' Log Out test', () => {
    login.visit_login();
    login.log_in()
    logout.log_out()
    
});

var explore_category = new Explore_Category();
it.skip('Explore Category test', () => {
    login.visit_login();
    login.log_in()
    explore_category.visitcategory('/html/body/div[3]/div[1]/div[1]/img')
    cy.wait(7000)
    logout.log_out()
    
});

var search = new Search();
it.skip('Search test', () => {
    login.visit_login();
    login.log_in()
    search.item_search()
    logout.log_out()   
});

var paancorner = new Paan_Corner();
it.skip('Paan corner test', () => {
    login.visit_login();
    login.log_in()
    paancorner.visit_paancorner()
    cy.go('back')
    cy.go('back')
    logout.log_out()
    
});

var addtocart = new Add_to_Cart();
it('Add to cart test', () => {
    login.visit_login();
    login.log_in()
    cy.wait(2000)
    
    addtocart.adding('//*[@id="adiv"]/a[2]/button')
    cy.go('back')
    addtocart.adding('//*[@id="adiv"]/a[3]/button')
    cy.go('back')
    addtocart.adding('//*[@id="adiv"]/a[4]/button')
    cy.go('back')

    
    addtocart.removeitem('//*[@id="A-cart"]/div[1]/div[2]/button[1]')
    cy.go('back')

    addtocart.addquantity('//*[@id="A-cart"]/div[1]/div[2]/button[2]')
    cy.go('back')
    addtocart.addquantity('//*[@id="A-cart"]/div[1]/div[2]/button[2]')
    cy.go('back')
    logout.log_out()
    
});
    
});