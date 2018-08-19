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