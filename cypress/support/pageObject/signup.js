class Sign_Up{
    
    visit_signup(){
        cy.visit('https://zepto-masai.netlify.app/')
        cy.get('#login_h').click({force: true});
        cy.get('#signupLink').click();
        
        
        
    }
    sign_up(){
        cy.get('#signupUsername').type('zepto001')
        cy.get('#signupEmail').type('zepto001@gmail.com')
        cy.get('#signupContact').type('7098510151')
        cy.get('#signupPassword').type('password')
        cy.xpath("//button[@type='submit']").click()
        cy.on('window:alert',(msg)=>{
            expect(msg).to.eq('Signup Successful. Please Login!')
            return true;
        })
    }
}

export default Sign_Up

        