console.log(chrome.i18n.getMessage('ext_name') + ' page js is running');

var DEBUGGABLE = false;

function docdebug() {
	var obj = {};
	var x = document.querySelectorAll('.modal-dialog-content')[1];
	console.log(x);
	obj['.modal-dialog-content'] = x.style.cssText;
	var y = document.querySelector('.modal-dialog.share-client-dialog');
	obj['.modal-dialog.share-client-dialog'] = y.style.cssText;
	//console.log(y);
	return obj;
}
//.modal-dialog-content
//.modal-dialog.share-client-dialog


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		//sendResponse({type: 'hello'});
		switch (request.greeting) {
			case 'isItOpen':
				console.log(request);
				sendResponse({farewell: true});
				break;
			case 'debug':
				if (DEBUGGABLE) {
					sendResponse(docdebug());
				}
				break;
		}
		return true;
	}
);

var targetNode = document.body;
var config = { childList: true, subtree: true };

var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
        	/*var x = mutation.addedNodes;
        	console.log(x[0]);
        	if (x[0].classList.contains('share-client-dialog')) {
        		DEBUGGABLE = true;
        		observer.disconnect();
        	}*/
            //console.log(mutation.addedNodes);
        }
    }
};

var observer = new MutationObserver(callback);
//observer.observe(targetNode, config);