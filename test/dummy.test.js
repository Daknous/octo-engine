const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('My super cool test', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
	});

	it('should pass', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

		// await suitest.assert.element('ChannelNumber').exists();
		await suitest.assert.element('ChannelNumber').matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: '001',
			},
			suitest.PROP.WIDTH,
		]).timeout(10000);

		// Test if element exist
		// https://suite.st/docs/suitest-api/assertions-test-subjects/#element
		await assert.element({
			xpath: '//TvPlayerView//VpView//AspectRatioFrameLayout/SubtitleView[@id="view_vp_subtitles"]',
			index: 1,
		}).exist();
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
