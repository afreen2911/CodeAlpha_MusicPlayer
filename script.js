const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('song-title');

let isPlaying = false;
let songIndex = 0;

// Array of songs
const songs = [
    { title: "Song 1", src: "music/song1.mp3" },
    { title: "Song 2", src: "music/song2.mp3" },
    { title: "Song 3", src: "music/song3.mp3" },
    { title: "Song 4", src: "music/song4.mp3" },
    { title: "Song 5", src: "music/song5.mp3" },
    { title: "Song 6", src: "music/song6.mp3" }
];

// Load song
function loadSong(song) {
    songTitle.textContent = song.title;
    audioPlayer.src = song.src;
}

// Play song
function playSong() {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
    isPlaying = true;
}

// Pause song
function pauseSong() {
    audioPlayer.pause();
    playBtn.textContent = 'Play';
    isPlaying = false;
}

// Toggle play/pause
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Previous song
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex === 0) ? songs.length - 1 : songIndex - 1;
    loadSong(songs[songIndex]);
    playSong();
});

// Next song
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex === songs.length - 1) ? 0 : songIndex + 1;
    loadSong(songs[songIndex]);
    playSong();
});

// Load the first song on page load
loadSong(songs[songIndex]);
