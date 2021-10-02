const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert,VRC, PROP} = suitest;
var fse = require('fs-extra');
const settings = fse.readJSONSync('./users.json');

describe('Live show metadata matches ZAPI', () => {
	before(async() => {
		// Start test
		await suitest.startTest('');
		
	});

	it('OSD: Channel name and show name match ZAPI response ', async() => {
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
	
		//Assert show name matches ZAPI response
		await assert.element({
			xpath: '//TvPlayerView//BigscreenVideoControllerView/OsdView/ConstraintLayout/AppCompatTextView[@id="showTitleView"]',         ////TvPlayerView//BigscreenVideoControllerView/OsdView/ConstraintLayout/AppCompatTextView[@id="showTitleView"]
			index: 1,
		}).matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: settings.interactive[0].showName,
			},
		]).timeout(20000);

		// Assert Next show name matches ZAPI response
		await assert.element({
			xpath: '//LinearLayout[3]/AppCompatTextView[@id="showName"]',         ////TvPlayerView//BigscreenVideoControllerView/OsdView/ConstraintLayout/AppCompatTextView[@id="showTitleView"]
			index: 1,
		}).matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: settings.interactive[0].nextshowName,
			},
		]).timeout(20000);


		// Test if element channel name maches ZAPI response
		// https://suite.st/docs/suitest-api/assertions-test-subjects/#element
		await assert.press(VRC.RIGHT)
	
		await assert.element({
			xpath: '//LinearLayout[1]/ConstraintLayout/AppCompatTextView[@id="channelName"]',         ////TvPlayerView//BigscreenVideoControllerView/OsdView/ConstraintLayout/AppCompatTextView[@id="showTitleView"]
			index: 1,
		}).matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: settings.interactive[0].channelName,
			},
		]).timeout(20000);

		
	});



	 it('Channel List: channel name and show name match ZAPI response', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await suitest.assert.location().equals('com.zattoo.tv.TvActivity');

		// Test if element exist
		// https://suite.st/docs/suitest-api/assertions-test-subjects/#element
		await assert.press(VRC.RIGHT).until(
			suitest.element('Channel_list').matches([
				PROP.ALPHA,
				PROP.BG_COLOR,
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
				PROP.TOP,
				PROP.TRANSLATION_X,
				PROP.TRANSLATION_Y,
				PROP.VISIBILITY,
				PROP.WIDTH,
			])
		).repeat(3).interval(5000);
	
		await assert.element({
			xpath: '//LinearLayout[1]/ConstraintLayout/AppCompatTextView[@id="programTitle"]',
			index: 1,
		}).matches([
			{
				name: suitest.PROP.TEXT_CONTENT,
				val: settings.interactive[0].showName,
			},
		]).timeout(20000);
	});












	after(async() => {
		// End test
		await suitest.endTest();
	});
});
