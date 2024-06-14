class Log_In{
    visit_login(){
        cy.visit('https://zepto-masai.netlify.app/')
        cy.get('#login_h').click({force: true});
    }
    log_in(){
    cy.get('#email').type('masai@gmail.com')
    cy.get('#password').type('test@123')
    cy.xpath("//button[@type='submit']").click()
    }
}

export default Log_In