//,"hot-reload.js"
const chromep = new ChromePromise();

var submit = document.querySelector('#submit');
var icon = document.querySelector('#icon');
var button = document.querySelector('#button');
var form = document.querySelector("form");

chromep.storage.local.get(['type', 'icolour', 'bcolour']).then(function (item) {
	console.log(item);
	switch (item.type) {
		case 'icon':
			document.querySelector('#icon').checked = true;
			document.querySelector('#iconcolour').value = item.icolour;
			document.querySelector('#buttoncolour').value = item.bcolour;
			document.querySelector('#share-doc-to-classroom-ext-label').style = 'background-color: ' + item.bcolour;
			document.querySelector('#buttonsection').style = 'display: none;';
			break;
		default:
			//button
			document.querySelector('#button').checked = true;
			document.querySelector('#buttoncolour').value = item.bcolour;
			document.querySelector('#share-doc-to-classroom-ext-label').style = 'background-color: ' + item.bcolour;
			document.querySelector('#iconcolour').value = item.icolour;
			document.querySelector('#iconsection').style = 'display: none;';
	}
	changeImage(item.icolour);
	document.querySelector('#status').innerText = 'Restored Settings';
	setTimeout(function() {
  		document.querySelector('#status').innerText = '';
  	}, 1000);
});

document.querySelector('#buttonreset').addEventListener('click', function(e) {
	document.querySelector('#buttoncolour').value = '#E3E2E2';
	document.querySelector('#share-doc-to-classroom-ext-label').style = 'background-color: #E3E2E2';
}, false);

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var data = new FormData(form);
	var dict = {};
	for (var entry of data) {
    	//output = entry[0] + "=" + entry[1] + "\r";
    	//name = entry[0]
    	//value = entry[1]
    	console.log(entry[0]);
    	var a = entry[0];
    	var b = entry[1];
    	dict[a] = b;
    	console.log(entry[1]);
    	//chromep.storage.local.set({a: b});
  	}
  	console.log(dict);
  	chromep.storage.local.set(dict)
  	.then(function(something){
  		document.querySelector('#status').innerText = 'Saved Settings';
		setTimeout(function() {
			document.querySelector('#status').innerText = '';
		}, 1000);
  	});
}, false);

form.addEventListener('change', function (e) {
	if (document.querySelector('#icon').checked == true) {
		document.querySelector('#iconsection').style = 'display: initial;';
		document.querySelector('#buttonsection').style = 'display: none;';
		changeImage(document.querySelector('#iconcolour').value);
	} else {
		document.querySelector('#buttonsection').style = 'display: initial;';
		document.querySelector('#share-doc-to-classroom-ext-label').style = 'background-color: ' + document.querySelector('#buttoncolour').value;
		document.querySelector('#iconsection').style = 'display: none;';
	}
}, false);


function changeImage (style) {
	var img = document.querySelector('#iconimage');
	switch (style) {
		case'light':
			img.src = chrome.runtime.getURL('images/light.svg');
			break;
		case 'dark':
			img.src = chrome.runtime.getURL('images/dark.svg');
			break;
		default:
			img.src = chrome.runtime.getURL('images/default.svg');;
	}
}