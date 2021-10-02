const {startApp, openMenu, checkOSDMetaData,openChannelList} = require('../scripts/common');
const suitest = require('suitest-js-api');
const {assert,VRC, PROP} = suitest;
var fse = require('fs-extra');
const { openApp } = require('suitest-js-api');
const settings = fse.readJSONSync('./users.json');

describe('Test your test', () => {
	
	
	// Run before every test 
	before(async() => {
	// Start test
	await suitest.startTest('');
    await startApp();
    await checkOSDMetaData();
		
	});

	
	
	it('check channel list', async() => {
	
		await openChannelList();
	
	});

	it('check side Menu', async() => {
		
		await openMenu();
		
	});



	
	after(async() => {
		// End test
		await suitest.endTest();
	});
});
