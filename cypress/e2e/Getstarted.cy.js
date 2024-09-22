const { describe } = require("mocha");
import 'cypress-file-upload';

require('cypress-xpath');

describe('Get Started Form Test', function () {
    // Set timeout for all commands in this test
    this.timeout(5000);  // Timeout for the whole test case

    it('should fill and submit the Get Started form', () => {
        // Visit the URL
        cy.visit('https://sandconsole.com/');

        // Fill in the form fields with timeout applied globally
        cy.xpath("(//input[@placeholder='Enter Name'])[1]")
          .type('Newton');

        cy.xpath("(//input[@placeholder='Enter Phone Number'])[1]")
          .type('1233453345');

        cy.xpath("(//input[@placeholder='Company Name'])[1]")
          .type('Sand Console Inc.');

        cy.xpath("(//input[@placeholder='Enter Email'])[1]")
          .type('newton@example.com');

        cy.xpath("(//textarea[@placeholder='Enter message'])[1]")
          .type('Looking forward to a quote.');

          //To verify  captacha  as mock  validation API 

          cy.intercept('POST', '/captcha/verify', { success: true }).as('captchaVerify');

        // Click on the "GET A QUOTE NOW" button
        cy.xpath("(//button[@type='submit'][normalize-space()='GET A QUOTE NOW'])[1]")
          .click();
    });
});
