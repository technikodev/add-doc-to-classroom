//just the share button, assuming user has already clicked share then copy link

function addMonitor(){
	var monitor = setInterval(function() {
  		check();
	}, 100);
}

function check() {
	//console.log('hi');
	if (document.getElementsByClassName('simple-sharing-vertical-spacer')[0] || document.getElementsByClassName('simple-sharing-people-heading')[0] ) {
		var url = (window.location != window.parent.location)
				? document.referrer
				: document.location.href;
		
		if (document.getElementsByClassName('share-doc-to-classroom-button-ext')[0]) {
			//addsharebutton();
			//console.log('it\'s there');
		} else if (url.match('https:\/\/docs.google.com/document')){
			addsharebutton();
			clearInterval(monitor);
		}
	} else {
		console.log(document.getElementsByClassName('simple-sharing-vertical-spacer')[0]);
		console.log(document.getElementsByClassName('simple-sharing-people-heading')[0]);
	}
}

window.onload = addMonitor;


function addsharebutton() {
	
	if (document.getElementsByClassName('simple-sharing-vertical-spacer')[0]) {
		var spacer = document.getElementsByClassName('simple-sharing-vertical-spacer')[0];
		spacer.parentNode.removeChild(spacer);
	}
	
	document.getElementsByClassName('data-dialog')[0].style = '';

	var bar = document.getElementsByClassName('simple-sharing-button-bar')[0];
	bar.style = 'margin-top: 0px';

	var insertinto = document.getElementsByClassName('simple-sharing-people-heading')[0];
	var container = document.createElement('div');
	container.classList.add('share-doc-to-classroom-button-ext');

	var scripty = document.createElement('script');
	scripty.src = 'https://apis.google.com/js/platform.js';
	container.appendChild(scripty);
	
	var bry = document.createElement('br');
	container.appendChild(bry);

	var tabley = document.createElement('table');
	var tableyr = document.createElement('tr');
	
	var divtd = document.createElement('td');
	

	var divy = document.createElement('div');
	divy.classList.add('g-sharetoclassroom');
	divy.dataset.size = '48';

	var url = (window.location != window.parent.location)
				? document.referrer
				: document.location.href;

	divy.dataset.url = url;
	divtd.appendChild(divy);
	
	var texttd = document.createElement('td');
	var text = document.createElement('p');
	text.innerText = 'Share Doc to Classroom';
	texttd.appendChild(text);
	
	tableyr.appendChild(divtd);
	tableyr.appendChild(texttd);
	tabley.appendChild(tableyr);
	container.appendChild(tabley);

	insertinto.insertBefore(container, insertinto.firstChild);
}


//insertinto.appendChild(container);
