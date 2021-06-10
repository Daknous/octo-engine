const suitest = require('suitest-js-api');
const {assert, VRC, PROP} = suitest;

describe('channel line-up', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
	});

	//Launch Process
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
	
	//Test Zap channels
	it('should zap', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

		// Assert current position is Channel 001
		await suitest.assert.element('ChannelNumber').matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: '001',
			},
			suitest.PROP.WIDTH,
		]).timeout(10000)

		//Zap up one time
		await assert.press(VRC.UP).interval(1000);

		// Assert current position increased to Channel 002
		await suitest.assert.element('ChannelNumber').matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: '002',
			},
			suitest.PROP.WIDTH,
		]).timeout(10000);
	});

	//Test channel categories
	it('should have All categories', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

	/**
	 * Checks All channels category 
	 * await assert.runTest('0f4f0fc2-8b1a-4a7e-affe-465b773c9871');
	 */
		
		await assert.press(VRC.RIGHT).until(
			suitest.element('allChannels').matches([
				PROP.ALPHA,
				PROP.HAS_FOCUS,
				PROP.ID,
				PROP.IS_CHECKED,
				PROP.IS_CLICKABLE,
				PROP.IS_COMPLETELY_DISPLAYED,
				PROP.IS_ENABLED,
				PROP.IS_FOCUSABLE,
				PROP.IS_SELECTED,
				PROP.IS_TOUCHABLE,
				PROP.PACKAGE_NAME,
				PROP.SCALE_X,
				PROP.SCALE_Y,
				{
					name: PROP.TEXT_COLOR,
					val: '<%Background_Color%>',
				},
				PROP.TEXT_CONTENT,
				PROP.TRANSLATION_X,
				PROP.TRANSLATION_Y,
				PROP.VISIBILITY,
			])
		).repeat(9).interval(1000);
		await assert.press(VRC.UP).until(
			suitest.element('allChannels').matches([
				PROP.ALPHA,
				PROP.HAS_FOCUS,
				PROP.ID,
				PROP.IS_CHECKED,
				PROP.IS_CLICKABLE,
				PROP.IS_COMPLETELY_DISPLAYED,
				PROP.IS_ENABLED,
				PROP.IS_FOCUSABLE,
				PROP.IS_TOUCHABLE,
				PROP.PACKAGE_NAME,
				PROP.SCALE_X,
				PROP.SCALE_Y,
				PROP.TEXT_CONTENT,
				PROP.TRANSLATION_X,
				PROP.TRANSLATION_Y,
				PROP.VISIBILITY,
			])
		).repeat(9).interval(1000);
	/**
	 * Checks First channel name
	 */
		await assert.press(VRC.RIGHT).until(
			suitest.element('allChannels').matches([
				PROP.ALPHA,
				PROP.HAS_FOCUS,
				PROP.ID,
				PROP.IS_CHECKED,
				PROP.IS_CLICKABLE,
				PROP.IS_COMPLETELY_DISPLAYED,
				PROP.IS_ENABLED,
				PROP.IS_FOCUSABLE,
				PROP.IS_SELECTED,
				PROP.IS_TOUCHABLE,
				PROP.PACKAGE_NAME,
				PROP.SCALE_X,
				PROP.SCALE_Y,
				{
					name: PROP.TEXT_COLOR,
					val: '<%Background_Color%>',
				},
				PROP.TEXT_CONTENT,
				PROP.TRANSLATION_X,
				PROP.TRANSLATION_Y,
				PROP.VISIBILITY,
			])
		).repeat(2).interval(1000);
		await assert.element('channelName').matches([
			PROP.ALPHA,
			PROP.HAS_FOCUS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.IS_CHECKED,
			PROP.IS_CLICKABLE,
			PROP.IS_COMPLETELY_DISPLAYED,
			PROP.IS_ENABLED,
			PROP.IS_FOCUSABLE,
			PROP.IS_SELECTED,
			PROP.IS_TOUCHABLE,
			PROP.LEFT,
			PROP.PACKAGE_NAME,
			PROP.PIVOT_X,
			PROP.PIVOT_Y,
			PROP.SCALE_X,
			PROP.SCALE_Y,
			PROP.TEXT_COLOR,
			PROP.TEXT_SIZE,
			{
				name: PROP.TEXT_CONTENT,
				val: '<%firstChannel%>',
			},
			PROP.TOP,
			PROP.TRANSLATION_X,
			PROP.TRANSLATION_Y,
			PROP.VISIBILITY,
			PROP.WIDTH,
		]).timeout(10000);
		
	});

	//Test channel categories
	it('should have Fav categories', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

		/**
		 * Checks Favorites category
		 * await assert.runTest('0620d340-df8e-42d4-9aef-8f7fdc4dad3d');
		 */
		
		await assert.press([VRC.RIGHT,VRC.RIGHT,VRC.UP]).until(
			suitest.element('favoritesCategory').matches([
				PROP.ALPHA,
				PROP.HAS_FOCUS,
				PROP.HEIGHT,
				PROP.ID,
				PROP.IS_CHECKED,
				PROP.IS_CLICKABLE,
				PROP.IS_COMPLETELY_DISPLAYED,
				PROP.IS_ENABLED,
				PROP.IS_FOCUSABLE,
				PROP.IS_SELECTED,
				PROP.IS_TOUCHABLE,
				PROP.LEFT,
				PROP.PACKAGE_NAME,
				PROP.PIVOT_X,
				PROP.PIVOT_Y,
				PROP.SCALE_X,
				PROP.SCALE_Y,
				{
					name: PROP.TEXT_COLOR,
					val: '<%Background_Color%>',
				},
				PROP.TEXT_SIZE,
				PROP.TEXT_CONTENT,
				PROP.TOP,
				PROP.TRANSLATION_X,
				PROP.TRANSLATION_Y,
				PROP.VISIBILITY,
				PROP.WIDTH,
			])
		).repeat(9).interval(1000);
		await assert.element('favoritesCategory').matches([
			PROP.ALPHA,
			PROP.HAS_FOCUS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.IS_CHECKED,
			PROP.IS_CLICKABLE,
			PROP.IS_COMPLETELY_DISPLAYED,
			PROP.IS_ENABLED,
			PROP.IS_FOCUSABLE,
			PROP.IS_SELECTED,
			PROP.IS_TOUCHABLE,
			PROP.LEFT,
			PROP.PACKAGE_NAME,
			PROP.PIVOT_X,
			PROP.PIVOT_Y,
			PROP.SCALE_X,
			PROP.SCALE_Y,
			{
				name: PROP.TEXT_COLOR,
				val: '<%Background_Color%>',
			},
			PROP.TEXT_SIZE,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.TRANSLATION_X,
			PROP.TRANSLATION_Y,
			PROP.VISIBILITY,
			PROP.WIDTH,
		]).timeout(10000);
	});

	
	after(async() => {
		// End test
		await suitest.endTest();
	});
});
