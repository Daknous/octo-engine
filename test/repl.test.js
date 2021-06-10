const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('Interactive REPL', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
	});

	it('should be started with available variables: suitest, body', async() => {
		// Open app
		await assert.openApp();

		// Get body element
		const bodyElementChain = suitest.element({css: 'body'});
		const body = await bodyElementChain;

		await suitest.interactive({
			// These variables will be available in repl mod
			// https://suite.st/docs/suitest-api/repl-debugging/#parameters
			vars: {
				suitest,
				body,
			},

			repeater() {
				console.log('I will be called whenever file changes.');
				// Variable 'body' will be available from parent lexical scope
				console.log(body);
			}
		});

		await bodyElementChain.exist().toAssert();
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
