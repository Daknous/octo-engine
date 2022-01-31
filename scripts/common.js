const { openApp } = require('suitest-js-api');
const suitest = require('suitest-js-api');
const {assert, VRC} = suitest;
const {channelNumber, showName, nextshowName, exoPlayer, allChannels, sideMenu} = require('../elements/elements');
const {snapshotElement} = require('./utils');

/**
 * Module tests
 */
module.exports = {

	/**
	 * Make sure that home page is opened
	 * @returns {Promise<void>}
	 */
	    startApp: async() => { 
		//await suitest.assert.location().equals('com.zattoo.tv.TvActivity');
		await suitest.assert.element(exoPlayer.selector).exists();	
	},


	/**
	 * Check player metadata
	 * @returns {Promise<void>}
	 */
	 checkOSDMetaData: async() => {
		await snapshotElement(channelNumber).timeout(20000);
		await snapshotElement(showName).timeout(20000);
		//await snapshotElement(nextshowName).timeout(20000);
	},
	/**
	 * Open channel list 
	 * @returns {Promise<void>}
	 */
	 	openChannelList: async() => {
		await assert.press(VRC.RIGHT).until(
			suitest.element(allChannels.selector).exist()			//matches(allChannels.props)
		).interval(10000).repeat(2);
		//await snapshotElement(allChannels).timeout(20000);
	},

	/**
	 * Open main menu 
	 * @returns {Promise<void>}
	 */
	 openMenu: async() => {
		await assert.press(VRC.LEFT).until(
			suitest.element(sideMenu.selector).exist()             //matches(sideMenu.props)
		).interval(1000).repeat(7);
		//await snapshotElement(sideMenu).timeout(20000);

	},

};