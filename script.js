const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play & pause video
function toggleVideoStatus(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}


//update play/pause icon
function updatePlayIcon(){
	if(video.paused){
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
		
	}else{
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}


//update progress and timestamp
function updateProgress(){
	//progress.value = (video.currentTime/video.duration)*100;

	//get minutes
	let min = Math.floor(video.currentTime/60);
	if(min <10){
		min = '0'+String(min);
	}

	//get seconds
	let sec = Math.floor(video.currentTime%60);
	if(sec <10){
		sec = "0"+String(sec);
	}

	timestamp.innerHTML = `${min}:${sec}`;
}

//Set Video progress
function setVideoProgress(){
	video.currentTime = (progress.value*video.duration)/100;
}
//Stop video
function stopVideo(){
	video.currentTime = 0;
	video.pause();
}

video.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
stop.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', updateProgress);