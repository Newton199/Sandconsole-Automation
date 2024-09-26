describe('API Request to sandconsole.com', () => {
    it(' GET request', () => {
      cy.request({
        method: 'GET',
        url: 'https://sandconsole.com', // Replace with the specific endpoint if needed
      }).then((response) => {
        // Check status code
        expect(response.status).to.eq(200); // Adjust according to expected status code
        expect(response.headers).to.have.property('content-type')
      
      });
    });
  });
  