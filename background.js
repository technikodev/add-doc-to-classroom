//background.js

chrome.browserAction.onClicked.addListener(function(tab) {
  	chrome.tabs.create({url: 'chrome://extensions'});
});