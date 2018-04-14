//make the box bigger

function addMonitor() {
	var monitor = setInterval(function() {
  		check();
	}, 100);
}



function check() {
	if (document.getElementsByClassName('modal-dialog-content')[1]) {
		//console.log(document.getElementsByClassName('modal-dialog-content')[1]);
		if (!document.getElementsByClassName('share-doc-to-classroom-box-ext')[0]) {
			var dialog = document.getElementsByClassName('modal-dialog-content')[1];
			
			var newstyle = document.createElement('style');
			newstyle.id = 'share-doc-to-classroom-style-ext';
			newstyle.innerHTML = '.share-doc-to-classroom-box-ext { height: 360px !important; }';
			document.body.appendChild(newstyle);
			
			dialog.classList.add('share-doc-to-classroom-box-ext');
			clearInterval(monitor);
		}
	}
	/*if (!document.getElementsByClassName('share-client-dialog-hidden-title')[0]) {
		var newstyle = document.getElementById('share-doc-to-classroom-style-ext');
		if (newstyle.innerHTML === '.share-doc-to-classroom-box-ext { height: 360px !important; }') {
			newstyle.innerHTML = '.share-doc-to-classroom-box-ext { height: 684px !important; }';
		}
	} else {
		var newstyle = document.getElementById('share-doc-to-classroom-style-ext');
		if (newstyle.innerHTML !== '.share-doc-to-classroom-box-ext { height: 360px !important; }') {
			newstyle.innerHTML = '.share-doc-to-classroom-box-ext { height: 360px !important; }';
		}
	}*/
}

addMonitor();