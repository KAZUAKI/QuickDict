function AppWindow(title) {
	// Here is an example on how to use the Dictionary module
	var referenceLibrary = require('bencoding.dictionary').createReferenceLibrary(), 
	popover = require('ui/popover').popover, pop;

	var tilanguage = require('kaz.ti.languageset');
	
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : '#fff',
		tabBarHidden : true,
		barImage: 'images/topcorner_bg.png',
		barColor : '#f3f3f3',
	});

	var titleLabel = Ti.UI.createLabel({
		color : '#800F0D',
		text : 'Quick Dictionary',
		font : {
			fontSize : 20,
			fontFamily : 'TrebuchetMS-Bold'
		}
	});
	self.titleControl = titleLabel;

	var language = Titanium.Platform.locale;
	Ti.API.info("Locale is = " + language);

	var dic = ['英和', '英英'];
	var dicvalue = ['ja','en'];
	var currentlang = (language == 'ja') ? dic[0] : dic[1];

	var langButton = Ti.UI.createLabel({
		text : currentlang,
		color : '#444',
		font : {
			fontSize : 14
		},
		backgroundColor:'#dfdfdf',
		width: 40,
		height: 26,
		textAlign: 'center'
	});
	self.setLeftNavButton(langButton);

	var table = Ti.UI.createTableView({
		data : [Ti.UI.createTableViewRow({
			title : '英和：English - Japanese',
			value : 'ja',
			font  : {fontSize:16,fontFamily:'Maven Pro',fontWeight:'normal'}
		}), Ti.UI.createTableViewRow({
			title : '英英：English - English',
			value : 'en',
			font  : {fontSize:16,fontFamily:'Maven Pro',fontWeight:'normal'}
		})]
	});
	table.addEventListener('click', function(e) {
		if(langButton.text == dic[0]) {
			langButton.text = dic[1];
			tilanguage.changeLanguage(dicvalue[1]);
		} else {
			langButton.text = dic[0];
			tilanguage.changeLanguage(dicvalue[0]);
		}
		pop.close();
		searchButton.focus();
	});

	langButton.addEventListener('click', function() {
		searchButton.blur();
		pop = new popover({
			title : 'Dictionaries',
			view : table
		});
		pop.open();
	});


	var featureSupported = referenceLibrary.isSupported();
	if(!featureSupported) {
		termDialogHadError(featureSupported);
	}

	var historycount = 0;
	var data = [];

	var searchButton = Titanium.UI.createSearchBar({
		barColor : '#eee',
		showCancel : false,
		height : 43,
		top : 0,
		hintText : 'Enter the words',
		keyboardType : Titanium.UI.KEYBOARD_ASCII
	});
	self.add(searchButton);

	self.addEventListener('open', function() {
		searchButton.focus();
	});
	
	var blurrow = Ti.UI.createTableViewRow();
	data[0] = blurrow;

	var tableView = Ti.UI.createTableView({
		top : 44,
		editable : true,
		data : data
	});
	self.add(tableView);

	searchButton.addEventListener('return', function(e) {
		searchButton.blur();
		if(searchButton.value.length === 0) {
			var missingInfo = Ti.UI.createAlertDialog({
				title : 'Missing Word',
				message : 'Please enter a term to lookup'
			}).show();
			return;
		}
		var hasDefinition = referenceLibrary.wordHasDefinition(searchButton.value);
		if(!hasDefinition) {
			var noWord = Ti.UI.createAlertDialog({
				title : 'No Definition!',
				message : 'Please enter another word'
			}).show();
			return;
		}
		//Open Dictionary
		referenceLibrary.showDialog({
			term : e.source.value,
			animated : true,
			modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL
		});

		// Adding the word in History
		var row = Ti.UI.createTableViewRow({
			height: Ti.UI.FILL,
			title : e.source.value,
			hasChild : true
		});
		if(historycount === 0) {
			row.header = 'History';
		}
		historycount++;

		setTimeout(function() {
			tableView.insertRowBefore(0, row);
		}, 1000);
	});

	tableView.addEventListener('click', function(e) {
		if(e.source.title != null) {
			referenceLibrary.showDialog({
				term : e.source.title,
				animated : true,
				modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL
			});
		}
	});
	
/*
	//If you want you can define some callbacks
	function termDialogBoxHasBeenClosed() {
		var onClose = Ti.UI.createAlertDialog({
			title : 'Term Dialog Closed',
			message : "I'm a callback that you can use to tell when the Definition Dialog Box has been closed."
		}).show();
	}

	function termDialogHadError(e) {
		var onError = Ti.UI.createAlertDialog({
			title : 'Error',
			message : "I'm a callback that you can use to tell when the an error happens in the lookup process. This error is due to: " + e.error
		}).show();
	}

	Ti.API.info("You can add an event to be called if there is an error");
	referenceLibrary.addEventListener('errored', termDialogHadError);

	Ti.API.info("You can add an event to be called when the definition dialog is closed");
	referenceLibrary.addEventListener('closed', termDialogBoxHasBeenClosed);
*/

	return self;
};

module.exports = AppWindow;
