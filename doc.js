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
			newstyle.innerHTML = '.share-doc-to-classroom-box-ext { height: 360px !important; }';
			document.body.appendChild(newstyle);
			
			dialog.classList.add('share-doc-to-classroom-box-ext');
			clearInterval(monitor);
		}
	}
}

addMonitor();