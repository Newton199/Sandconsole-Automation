import 'cypress-file-upload';

require('cypress-xpath');

describe('Click Apply Now Button and Fill the Form', () => {
    it('Clicks Apply Now and fills the form using XPath', () => {
        // Visit the job page
        cy.visit('https://sandconsole.com/career/mid-level-quality-assurance-qa-engineer');

        // Click the 'Apply Now' button using XPath
        cy.xpath("//button[normalize-space()='Apply Now']").click();

        // Wait for the form to be visible
        cy.get('form', { timeout: 10000 }).should('be.visible');

        // Fill out the form fields using provided XPath selectors
        cy.xpath("//input[@id='name']").should('be.visible').type('Newton Raj kaphle'); // Your Name
        cy.xpath("//input[@id='email']").should('be.visible').type('kaphlenerob@gmail.com'); // Your Email
        cy.xpath("//input[@id='companyName']").should('be.visible').type('1234567890'); // Mobile Number

        // Attach CV file from the fixtures directory
        cy.get("input[type='file']").attachFile('Newton Raj Kaphle Resume.pdf'); // No path needed if in fixtures

        // Submit the form using the provided XPath for the button
        cy.xpath("//button[normalize-space()='SEND MESSAGE']").click();
    });
});
