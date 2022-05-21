document.addEventListener('DOMContentLoaded', function() {
	
	chrome.storage.local.get('keys',(result) => {
		if (result.keys){
			document.getElementById(result.keys).checked = true;
		}else{
			document.getElementById('none').checked = true;
		}
	});
	
	let keys = document.forms["keys_selection"].elements["keys"];

	for(let i = 0; i < keys.length; i++){
		keys[i].onclick = () => {
			chrome.storage.local.set({'keys':keys[i].id});
		}
	}	
	
	
});
