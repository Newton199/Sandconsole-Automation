describe('API Test for Get Started Form', () => {
    it('should successfully submit the form via API', () => {
        // Define the payload for the form with the specific details
        const formData = {
            name: 'Newton Raj Kaphle',
            phone: '1234567890',  // Example phone number, change as needed
            company: 'SandConsole Pvt Ltd',
            email: 'newton@sandconsole.com',
            message: 'Hello everyone',
        };

        // Make an API request to the form submission endpoint
        cy.request({
            method: 'POST',
            url: 'https://sandconsole.com', // Replace with the actual form submission API URL
            body: formData,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            // Validate the response
            expect(response.status).to.eq(200);  // Check that the response status is 200 (success)
            expect(response.body).to.have.property('success', true);  // Check if success flag is true
        });
    });
});
