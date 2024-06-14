class Explore_Category{
    visitcategory(category){
        cy.xpath(category).click()
    }
}

export default Explore_Category