const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Tên bài hát
const songs =['Chỉ Muốn Đến Em Thật Gần', 
			  'Đám Cưới Nha', 
			  'Em Là Nhất',
			  'Hồng Nhan',
			  'Vì Anh Là Gió',
			  'Yêu Đơn Phương Là Gì'];

// Theo dõi bài hát
let songIndex = 2;

// Ban đầu tải chi tiết bài hát vào DOM
loadSong(songs[songIndex]);

// Cập nhật chi tiết bài hát
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function tennhac(songName) {
  loadSong(songName);
  playSong(); 
}

// Tạm dừng bài hát
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Bài hát trước
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Bài hát tiếp theo
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Cập nhật thanh tiến trình
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Đặt thanh tiến trình
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//lấy thời lượng và thời gian hiện tại cho thời gian của bài hát
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// xác định phút hiện tại thời gian
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// xác định giây thời gian hiện tại
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// thay đổi DOM thời gian hiện tại
	currTime.innerHTML = min +':'+ sec;

	// xác định thời lượng phút
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// xác định thời lượng giây
	get_sec_d (duration);

	// thay đổi thời lượng DOM
	durTime.innerHTML = min_d +':'+ sec_d;
			
};

// Người nghe sự kiện
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Thay đổi bài hát
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Cập nhật thời gian/bài hát
audio.addEventListener('timeupdate', updateProgress);

// Bấm vào thanh tiến trình
progressContainer.addEventListener('click', setProgress);

// Kết thúc bài hát
audio.addEventListener('ended', nextSong);

// Thời gian của bài hát
audio.addEventListener('timeupdate',DurTime);