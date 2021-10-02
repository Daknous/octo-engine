const {openApp, startApp, checkOSDMetaData} = require('../scripts/common');
const suitest = require('suitest-js-api');
const {assert,VRC, PROP} = suitest;
var fse = require('fs-extra');
const { openApp } = require('suitest-js-api');
const settings = fse.readJSONSync('./users.json');

describe('Smoke Test', () => {
	beforeEach(async() => {
		// Start test
		await suitest.startTest('');
		await suitest.openApp();
		
	});
	
	describe('Player should work on app start', () => {
		
		it('check App is opened and player is working', async() => {
		
			await startApp();
		
		});

	});

	describe('OSD should work and Metadata is loaded', () => {
		
		it('check OSD Metadata matches ZAPI response', async() => {
		
			await checkOSDMetaData();
		
		});
	});


	describe('Channel list should work and Metadata is loaded', () => {
	
		it('check Channel list has all channels and favorites categories', async() => {
		
			await openChannelList();
		
		});
	});
	
	describe('Side Menu shoudl load all Entry menues', () => {

		it('check App is opened and player initialised', async() => {
		
			await openMenu();
		
		});
	});	

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
