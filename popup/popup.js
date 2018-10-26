document.querySelector('#options').addEventListener('click', function(e){
	chrome.runtime.openOptionsPage();
}, false);

document.querySelector('#share').addEventListener('click', function(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		console.log(tabs[0].url);
		var openurl = 'https://classroom.google.com/share?url=' + encodeURIComponent(tabs[0].url);
		window.open(openurl, 'addToClassroomWindow', 'width=500,height=500');
		window.close();
	});
}, false);

for (var el of document.querySelectorAll('[data-i18n]')) {
	el.innerText = chrome.i18n.getMessage(el.dataset.i18n)
	console.log(chrome.i18n.getMessage(el.dataset.i18n))
}

/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	chrome.tabs.sendMessage(tabs[0].id, {greeting: 'debug'}, function(response) {
		console.log(response);
		//<a class="label" id="problem" href="" target="_blank">Report problem</a>
	});
});*/