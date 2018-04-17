//make the box bigger

function addMonitor() {
	/*
	var monitor = setInterval(function() {
  		check();
	}, 100);
	*/
	check();
}



function check() {
	/*if (document.getElementsByClassName('modal-dialog-content')[1]) {
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
	if (!document.getElementsByClassName('share-client-dialog-hidden-title')[0]) {
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
	
	/*
	//redeveloped to use a mutation observer
	//actually didn't even get to the stage of testing this, instead turned to css
	
	var minified = '.share-doc-to-classroom-box-ext { height: 360px !important; }';
	var link = '.share-doc-to-classroom-box-ext { height: 506px !important; }';
	var list = '.share-doc-to-classroom-box-ext { height: 681px !important; }';
	
	var containerFunction = function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'attributes') {
				var target = mutation.target;
				//share-client-dialog
			  	console.log(target.style);
			  	if (parseFloat(target.style.top) === 233.5) {
					//target.style.backgroundColor ="blue";
					//change the top
			  	}
			}
		});
	};

	var boxFunction = function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'attributes') {
				var target = mutation.target;
				//modal-dialog-content
				console.log(target.style);
				if (parseFloat(target.style.width) == 490) {
					target.style.backgroundColor ="blue";
				} else if (parseFloat(target.style.width) < 300) {
					target.style.backgroundColor ="red";
				}
			}
		});
	};


	var containerObserver = new MutationObserver(containerFunction);
	
	var containerTarget = document.getElementsByClassName('share-client-dialog')[0];
	
	var objConfig = {
		childList: true,
		subtree : true,
		attributes: true,
		attributeFilter: ['style'],
		characterData : false
	  };

	containerObserver.observe(containerTarget, objConfig);

	var boxObserver = new MutationObserver(boxFunction);
	var boxTarget = document.document.getElementsByClassName('modal-dialog-content')[1];

	boxObserver.observe(boxTarget, objConfig);
	*/
	
	var docStyle = document.createElement('style');
	/*docStyle.innerHTML = '
		.modal-dialog.share-client-dialog[style*="233.5px"] {
			//top: 160.5px !important;
			top: 160.5px !important;
		}
		.modal-dialog-content[style*="214px"] {
			//height: 360px !important;
			height: 262px !important;
		}
		
		.modal-dialog.share-client-dialog[style*="239.5px"] {
			top: 200px !important;
		}
		.modal-dialog-content[style*="360px"] {
			height: 380px !important;
		}
		
		.modal-dialog.share-client-dialog[style*="53px"] {
			top: 53px !important;
		}
		.modal-dialog-content[style*="535px"] {
			height: 535px !important;
		}
	';*/
	docStyle.innerHTML = '\n\t\t.modal-dialog.share-client-dialog[style*=\"233.5px\"] {\n\t\t\t//top: 160.5px !important;\n\t\t\ttop: 160.5px !important;\n\t\t}\n\t\t.modal-dialog-content[style*=\"214px\"] {\n\t\t\t//height: 360px !important;\n\t\t\theight: 262px !important;\n\t\t}\n\t\t\n\t\t.modal-dialog.share-client-dialog[style*=\"239.5px\"] {\n\t\t\ttop: 200px !important;\n\t\t}\n\t\t.modal-dialog-content[style*=\"360px\"] {\n\t\t\theight: 380px !important;\n\t\t}\n\t\t\n\t\t.modal-dialog.share-client-dialog[style*=\"53px\"] {\n\t\t\ttop: 53px !important;\n\t\t}\n\t\t.modal-dialog-content[style*=\"535px\"] {\n\t\t\theight: 535px !important;\n\t\t}';
	document.body.appendChild(docStyle);
}

addMonitor();

