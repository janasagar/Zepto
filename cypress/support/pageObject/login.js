class Log_In{
    visit_login(){
        cy.visit('https://zepto-masai.netlify.app/')
        cy.get('#login_h').click({force: true});
    }
    log_in(){
    cy.get('#email').type('zepto001@gmail.com')
    cy.get('#password').type('password')
    cy.xpath("//button[@type='submit']").click()
    }
}

export default Log_In