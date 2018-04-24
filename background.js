//background.js

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//initialise storage

const chromep = new ChromePromise();
function clear() {
	chrome.storage.local.clear(function() {
		var error = chrome.runtime.lastError;
		if (error) {
			console.error(error);
		}
		console.log('Storage cleared');
	});
}
clear();

function restore() {
	chromep.storage.local.get('initial').then(function(item) {
		
		if (item.initial == false) {
			console.log('initial was false');
		} else {			
			chromep.storage.local.set({initial: false, type: 'icon', icolour: 'green', bcolour: '#E3E2E2'});
			
		}
	}).catch(function(reason) {
		console.log(reason);
	});
}
restore();

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		//sendResponse({type: 'hello'});
    	chromep.storage.local.get(['type', 'icolour', 'bcolour']).then(function (item) {
    		//console.log(item.type);
    		var typeSend = item.type;
    		var icolourSend = item.icolour;
    		var bcolourSend = item.bcolour;
    		sendResponse({type: typeSend, icolour: icolourSend, bcolour: bcolourSend});
    	});
      	return true;
  	});

chrome.browserAction.onClicked.addListener(function(tab) {
  	//chrome.tabs.create({url: 'chrome://extensions'});
  	chrome.runtime.openOptionsPage();
});
