function AppTabGroup() {
	//declare module dependencies
	var AppWindow = require('ui/AppWindow');

	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var homeWin = new AppWindow(L('home'))

	var tab1 = Ti.UI.createTab({
		title : L('home'),
		icon : '/images/KS_nav_ui.png',
		window : homeWin
	});
	homeWin.containingTab = tab1;


	self.addTab(tab1);

	return self;
};

module.exports = AppTabGroup;
