const suitest = require('suitest-js-api');
const {PROP, COMP, VALUE} = suitest;
var fse = require('fs-extra');
const settings = fse.readJSONSync('./users.json');

module.exports = {
	/*
	* Define element selectors (xpath) and props (attributes) in code instead of using suitest's element repository
	* Elements props are fetched from ZAPI data 
    * Xpath is a relative path of an element on the UI
	*/
	channelNumber: {
		selector: 
            {
                xpath: '//LinearLayout[1]/ChannelNumberTextView[@id="channelNumberView"]',
                index: 1,
            },
		props: [
            {
                name: PROP.TEXT_CONTENT,
				val: '001',
            }
        ]
   
	
		
	},

    showName: {
		selector: 
            {
                xpath: '//TvPlayerView//BigscreenVideoControllerView/OsdView/ConstraintLayout/AppCompatTextView[@id="showTitleView"]',
                index: 1,
            },
		props: [
            {
                name: PROP.TEXT_CONTENT,
				val: settings.firstChannelMetadata[0].showName,
            }
        ]
   
	
		
	},

    nextshowName: {
		selector: 
            {
                xpath: '//LinearLayout[3]/AppCompatTextView[@id="showName"]',
                index: 1,
            },
		props: [
            {
                name: PROP.TEXT_CONTENT,
				val: settings.firstChannelMetadata[0].nextshowName,
            }
        ]
   
	
		
	},

    exoPlayer: {
		selector: 
            {
                xpath: '//FrameLayout[1]/TvPlayerView//VpView//AspectRatioFrameLayout/SurfaceView[@id="view_vp_surface"]',
                index: 1,
            },
		props: [
            {
                name: PROP.IS_COMPLETELY_DISPLAYED,
				val: true,
            }
        ]
   
	
		
	},

    allChannels: {
		selector: 
            {
                xpath: '//TvPlayerView//VpView//AspectRatioFrameLayout/SubtitleView[@id="view_vp_subtitles"]',
                index: 1,
            },
		props: [
            {
                name: PROP.IS_COMPLETELY_DISPLAYED,
				val: true,
            }
        ]
   
	
		
	},

    sideMenu: {
		selector: 
            {
                xpath: '//FrameLayout[3]//RelativeLayout[1]/f[@id="list_item_nav_title"]',
                index: 1,
            },
		props: [
            {
                name: PROP.TEXT_CONTENT,
				val: 'Guide',
            }
        ]
   
	
		
	},
};