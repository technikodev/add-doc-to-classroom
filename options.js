//,"hot-reload.js"
const chromep = new ChromePromise();

var submit = document.querySelector('#submit');
var icon = document.querySelector('#icon');
var button = document.querySelector('#button');
var form = document.querySelector("form");

chromep.storage.local.get('type').then(function (item) {
	console.log(item.type);
	var selected = document.querySelector('#' + item.type);
	selected.checked = true;
	document.querySelector('#status').innerText = 'Restored Settings';
	setTimeout(function() {
  		document.querySelector('#status').innerText = '';
  	}, 1000);
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
	var data = new FormData(form);
	for (var entry of data) {
    	//output = entry[0] + "=" + entry[1] + "\r";
    	//name = entry[0]
    	//value = entry[1]
    	console.log(entry[1]);
    	chromep.storage.local.set({type: entry[1]});
  	};
  	document.querySelector('#status').innerText = 'Saved Settings';
  	setTimeout(function() {
  		document.querySelector('#status').innerText = '';
  	}, 1000);
}, false);
