//implement extension messaging
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.greeting == 'debug') {
		console.log('message received');
		//sendResponse({farewell: 'goodbye'});
		docdebug();
		//sendResponse(res);
		//chrome.runtime.sendMessage({greeting: 'debugopen'}, function(response) {
			//do nothing?
		//});
	}
});

function docdebug() {
	var obj = {};
	var x = document.getElementsByClassName('modal-dialog-content')[1];
	//console.log(x);
	obj['.modal-dialog-content'] = x.style.cssText;
	var y = document.querySelector('.modal-dialog.share-client-dialog');
	obj['.modal-dialog.share-client-dialog'] = y.style.cssText;
	//console.log(y);
	
}
//.modal-dialog-content
//.modal-dialog.share-client-dialog