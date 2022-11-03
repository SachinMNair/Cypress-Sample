import * as path from 'path';
describe('Cypress Download Test', () => {
	before(() => {
		cy.visit('https://the-internet.herokuapp.com/download');
	});
	it('Download File', () => {
		cy.get('.example').within(() => {
			cy.get('a').first().should('exist').click();
		});	   
   });
   it('Read File', () => {
	const df = Cypress.config('downloadsFolder');
    const filename = path.join(df, "test.png");
	cy.readFile(filename, 'binary', {
        timeout: 15000,
      });
   });
});
