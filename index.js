//elements
const musicContainerEl = document.getElementById("music-container");
const albumCoverImageEl = document.getElementById("album-cover-image");
const progressEl = document.getElementById("progress");
const progressContainerEl = document.getElementById("progress-container");
const titleEl = document.getElementById("title");
const audioEl = document.getElementById("audio");

//buttons
const backwordBtn = document.getElementById("backword");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");

//all musics
const tracks = [
  "Konsta-Insonlar",
  "Basta-NaZare",
  "MaherZain-ForTheRestOfMyLife",
];

//current song
let currentSong = 0;

// change music
const changeMusic = (song) => {
  titleEl.textContent = `${song}`;
  audioEl.src = `../music/${song}.mp3`;
  albumCoverImageEl.src = `../images/${song}.jpg`;
};

changeMusic(tracks[currentSong]);

//play
const play = () => {
  musicContainerEl.classList.add("play");
  document.querySelector(
    ".btn-big"
  ).innerHTML = `<i class="fa-solid fa-pause"></i>`;
  audioEl.play();
};

//pause
const pause = () => {
  musicContainerEl.classList.remove("play");
  document.querySelector(
    ".btn-big"
  ).innerHTML = `<i class="fa-solid fa-play"></i>`;
  audioEl.pause();
};

//play song
const playSong = () => {
  if (musicContainerEl.classList.contains("play")) {
    pause();
  } else {
    play();
  }
};

//next song
const nextSong = () => {
  if (tracks.length - 1 > currentSong) {
    currentSong += 1;
  } else {
    currentSong = 0;
  }

  changeMusic(tracks[currentSong]);
  play();
};

//prev song
const prevSong = () => {
  if (currentSong <= 0) {
    currentSong = tracks.length - 1;
  } else {
    currentSong -= 1;
  }

  changeMusic(tracks[currentSong]);
  play();
};

//events
playBtn.addEventListener("click", playSong);
forwardBtn.addEventListener("click", nextSong);
backwordBtn.addEventListener("click", prevSong);
