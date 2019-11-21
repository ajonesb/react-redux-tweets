describe('React Redux Tweets', () => {

    // Test App Load and DOM Elements

    it('Loads the App', () => {
        cy.visit('http://localhost:8080');
    });

    it('Should have a header', () => {
        cy.get('h1')
            .should('have.text', 'REACT REDUX TWITTER API APP');
    });

    it('Should show the get Top Tweets button', () => {
        cy.get('button')
            .should('have.text', 'Get Top Tweets');
    });

    it('displays list of Twitter user names to fetch from API', () => {
        cy.get('p')
            .should('have.length', 6);
    });

    // Test Actions

    it('Test SELECT_USER action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'ADD_USER', text: 'Test Select User Action' })
        // check if the app has updated its UI
        // cy.get('.user-button p').should('have.length', 6).contains('Test Select User Action')
    })

    it('Test REQUEST_TWEETS action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'REQUEST_TWEETS', text: 'Test Receive Tweets Action' })
        // check if the app has updated its UI
        // cy.get('.user-button p').should('have.length', 6).contains('Test Receive Tweets Action')
    })

    it('Test RECEIVE_TWEETS action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'RECEIVE_TWEETS', text: 'Test Receive Tweets Action' })
        // check if the app has updated its UI
        // cy.get('.user-button p').should('have.length', 6).contains('Test Receive Tweets Action')
    })

});

// Test Specific API Calls
// This will fail because we don't have the API working with fetching the content


// describe('Request to Twitter API for users', () => {
//     it('displays user Batman from API', () => {
//       cy.request('api.twitter.com/1.1/users/search.json?q=batman')
//         .should((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.length(10);
//           expect(response).to.have.property('headers');
//           expect(response).to.have.property('duration');
//         });
//     });
//   });