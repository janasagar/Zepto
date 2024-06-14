class Explore_Category{
    visitcategory(category){
        cy.xpath('/html/body/div[2]/a/b').click()
        cy.xpath(category).click()
    }
}

export default Explore_Category