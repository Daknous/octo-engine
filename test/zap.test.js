const suitest = require('suitest-js-api');
const {assert, VRC, PROP} = suitest;

describe('Test channel line-up', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
		//Setup process
		it('Process start', async() => {
			// Open app
			await assert.openApp();
			await assert.clearAppData();
			await assert.openApp();
			if (await suitest.location().equals('com.zattoo.tv.OnboardingActivity')) {
				await assert.runTest('8d9a56cf-c400-4953-a009-8aac7bb4a2ac');
		}
			// Assert location
			await suitest.assert.location().equals('com.zattoo.tv.TvActivity');
	
			// Test if Player exist
			await assert.element({
				xpath: '//TvPlayerView//VpView//AspectRatioFrameLayout/SubtitleView[@id="view_vp_subtitles"]',
				index: 1,
			}).exist();
		}).timeout(10000);
	});

	//Test Zap channels
	it('should zap', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

		// Assert current position is Channel 001
		await suitest.assert.element('channelNumber').matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: '001',
			},
			suitest.PROP.WIDTH,
		]).timeout(10000)

		//Zap up one time
		await assert.press(VRC.UP).interval(1000);

		// Assert current position increased to Channel 002
		await suitest.assert.element('channelNumber').matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: '002',
			},
			suitest.PROP.WIDTH,
		]).timeout(10000);
	});

	
	after(async() => {
		// End test
		await suitest.endTest();
		//TearDown process
		await assert.clearAppData();
	});
});
