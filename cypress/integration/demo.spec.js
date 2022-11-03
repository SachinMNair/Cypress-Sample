import * as path from 'path';
describe('Cypress Download Test', () => {
	before(() => {
		cy.request('GET','https://the-internet.herokuapp.com/download/file1.png');
	});
   it('Read File', () => {
	const df = Cypress.config('downloadsFolder');
    const filename = path.join(df, "file1.png");
	cy.readFile(filename, 'binary', {
        timeout: 15000,
      });
   });
});