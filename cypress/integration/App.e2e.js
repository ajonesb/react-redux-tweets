describe('React Redux Tweets', () => {

    // Test App Load and DOM Elements

    it('Loads the App', () => {
        cy.visit('http://localhost:3000');
    });

    it('Should have a header', () => {
        cy.get('h1')
            .should('have.text', 'REACT REDUX TWITTER API APP');
    });

    it('Should show the Search Users button', () => {
        cy.get('button')
            .should('have.text', 'Search');
    });


    // Test Actions

    it('has expected state on load', () => {
        cy.window().its('store').invoke('getState').should('deep.equal', {
          todos: [
            {
              completed: false,
              id: 0,
              text: 'Use Redux',
            },
          ],
          visibilityFilter: 'show_all',
        })
      });



    it('Test SEARCH_USERS action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'SEARCH_USERS', text: 'Test Search Users Action' })
    });

    it('Test FETCH_USERS action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'FETCH_USERS', text: 'Test Fetch Users Action' })
    });

    it('Test LOADING action', () => {
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'LOADING', text: 'Test Loading Action' })
    });

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