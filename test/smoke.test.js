const {startApp, checkOSDMetaData, openChannelList, openMenu} = require('../scripts/common');
const suitest = require('suitest-js-api');
const {assert,VRC, PROP} = suitest;
var fse = require('fs-extra');
const { openApp } = require('suitest-js-api');
const settings = fse.readJSONSync('./users.json');

describe('Smoke Test', () => {
	//beforeEach hook runs before each describe 
	beforeEach(async() => {
		// Start test
		await suitest.startTest('');
		await suitest.openApp();
		
	});
	
	describe('Player should work on app start', () => {
		
		it('should check App is opened and player is working', async() => {
		
			await startApp();
		
		});

	});

	describe('OSD should work and Metadata is loaded', () => {
		
		it('should check OSD Metadata matches ZAPI response', async() => {
		
			await checkOSDMetaData();
		
		});
	});


	describe('Channel list should work and Metadata is loaded', () => {
	
		it('should check Channel list has all channels and favorites categories', async() => {
		
			await openChannelList();
		
		});
	});
	
	describe('Side Menu should load all Entry menues', () => {

		it('should check side menu opens and has configured entries', async() => {
		
			await openMenu();
		
		});
	});	
	//after hook runs once after last describe 
	after(async() => {
		// End test
		await suitest.endTest();
	});
});
