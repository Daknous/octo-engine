const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('With debugger', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
	});

	it('should stop at breakpoint and start debugger', async() => {
		// Open app
		await assert.openApp();

		// Get current location
		const loc = await suitest.location();

		// Start debugger
		debugger;
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
