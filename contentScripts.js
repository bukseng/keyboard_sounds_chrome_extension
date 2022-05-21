
document.addEventListener('keydown',(e) => {
	if (!e.ctrlKey) chrome.runtime.sendMessage({keycode:e.keyCode});	
},true);

let iframes = document.getElementsByTagName("iframe");
for (let i = 0;i < iframes.length; i++)
{
	let iframeContent = iframes[i].contentDocument || iframes[i].contentWindow;
	iframeContent.addEventListener('keydown',(e) => {
		if (!e.ctrlKey) chrome.runtime.sendMessage({keycode:e.keyCode});	
	},true);
}



