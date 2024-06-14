class Paan_Corner{
    visit_paancorner(){
        cy.get('#paan-anchor').click()
        cy.xpath('//*[@id="P-pdiv"]/a[1]/div/img').click({force: true})
    }
}
export default Paan_Corner