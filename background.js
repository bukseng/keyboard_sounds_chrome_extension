
let current_keys = 'none';

let mp3_mech_00 = document.getElementById('mech_00');
let mp3_mech_01 = document.getElementById('mech_01');
let mp3_mech_02 = document.getElementById('mech_02');
let mp3_mech_03 = document.getElementById('mech_03');
let mp3_mech_04 = document.getElementById('mech_04');
let mp3_mech_05 = document.getElementById('mech_05');
let mp3_norm_00 = document.getElementById('norm_00');
let mp3_norm_01 = document.getElementById('norm_01');
let mp3_norm_02 = document.getElementById('norm_02');
let mp3_typw_00 = document.getElementById('typw_00');
let mp3_typw_01 = document.getElementById('typw_01');
let mp3_laptop_00 = document.getElementById('laptop_00');
let mp3_laptop_01 = document.getElementById('laptop_01');
let mp3_wood_00 = document.getElementById('wood_00');
let mp3_silent_00 = document.getElementById('silent_00');

let audio_map = {
	 'mech_00': mp3_mech_00,
	 'mech_01': mp3_mech_01,
	 'mech_02': mp3_mech_02,
	 'mech_03': mp3_mech_03,
	 'mech_04': mp3_mech_04,
	 'mech_05': mp3_mech_05,
	 'norm_00': mp3_norm_00,
	 'norm_01': mp3_norm_01,
	 'norm_02': mp3_norm_02,
	 'typw_00': mp3_typw_00,
	 'typw_01': mp3_typw_01,
	 'laptop_00': mp3_laptop_00,
	 'laptop_01': mp3_laptop_01,
	 'silent_00': mp3_silent_00,
	 'wood_00': mp3_wood_00
};

let currentTime_map = {
	 'mech_00': .21,
	 'mech_01': .15,
	 'mech_02': .27,
	 'mech_03': .25,
	 'mech_04': .15,
	 'mech_05': .15,
	 'norm_00': .7,
	 'norm_01': .15,
	 'norm_02': .15,
	 'laptop_00': .05,
	 'laptop_01': .08
};

let loud_keys = ['mech_02','mech_04','wood_00','norm_01','norm_02','laptop_01'];

let current_mp3 = null;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		chrome.storage.local.get('keys',(result) => {
			current_keys = result.keys;
		});
		
		if (current_keys === 'none' || !(current_keys in audio_map)) return;
		
		current_mp3 = audio_map[current_keys];
		
		current_mp3.currentTime = 0;
		
		if (current_keys in currentTime_map){
			current_mp3.currentTime = currentTime_map[current_keys];
		}
		
		current_mp3.playbackRate = Math.random() * (.95 - .75) + .75;
		
		if (loud_keys.includes(current_keys)){
			current_mp3.volume = Math.random() * (.20 - .1) + .1;
		}else{
			current_mp3.volume = Math.random() * (.9 - .7) + .7;
		}
		current_mp3.play();
	}
);


  

 
