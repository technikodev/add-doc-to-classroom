//just the share button, assuming user has already clicked share then copy link

//window.$ = document.querySelectorAll.bind(document);



//container.innerHTML = '<script src="https://apis.google.com/js/platform.js" async defer></script><g:sharetoclassroom url="http://url-to-share" size="32"></g:sharetoclassroom>';
//container.innerHTML = '<script src="https://apis.google.com/js/platform.js" async defer></script><g:sharetoclassroom url="http://url-to-share" size="32"></g:sharetoclassroom></div><div class="simple-sharing-vertical-spacer">';

//var container = document.createElement('div');
//container.innerHTML = '<div class="g-sharetoclassroom" data-size="32" data-url="https://google.com" ></div><script src="https://apis.google.com/js/platform.js"></script><div class="simple-sharing-vertical-spacer">';

//<div class="simple-sharing-vertical-spacer">

function addMonitor(){
	var monitor = setInterval(function() {
  		check();
	}, 100);
}

function check() {
	//console.log('hi');
	if (document.getElementsByClassName('simple-sharing-vertical-spacer')[0] && document.getElementsByClassName('simple-sharing-people-heading')[0] ) {
		var url = (window.location != window.parent.location)
				? document.referrer
				: document.location.href;
		if (url.match('https:\/\/docs.google.com/document')){
			addsharebutton();
			clearInterval(monitor);
		}
	}
}

window.onload = addMonitor;


function addsharebutton() {
	var spacer = document.getElementsByClassName('simple-sharing-vertical-spacer')[0];
	spacer.parentNode.removeChild(spacer);

	var bar = document.getElementsByClassName('simple-sharing-button-bar')[0];
	bar.style = 'margin-top: 0px';

	var insertinto = document.getElementsByClassName('simple-sharing-people-heading')[0];
	var container = document.createElement('div');

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

//https://docs.google.com/document/d/1viSok-RZtlQNVU0BYGZ13nmDp4s6QgkZTgtR6WgD_2Q/edit