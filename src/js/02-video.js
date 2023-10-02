import Player from '@vimeo/player';
const videoPlayer = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(videoPlayer);
const localStorageKey = "videoplayer-current-time";

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


// Отримайте поточний час відтворення відео
const currentTime = videoPlayer.currentTime;

// Збережіть поточний час відтворення в локальному сховищі
localStorage.setItem('localStorageKey', currentTime);

// Відслідковуйте подію завантаження відео
videoPlayer.addEventListener('loadedmetadata', () => {
  // Отримайте збережений час відтворення з локального сховища
  const savedTime = localStorage.getItem('localStorageKey');

  // Якщо є збережений час відтворення, встановіть його
  if (savedTime !== null) {
    videoPlayer.currentTime = parseFloat(savedTime);
  }

  // Почніть відтворення відео
  videoPlayer.play();
});

// Видаліть збережений час відтворення при завершенні відтворення відео
videoPlayer.addEventListener('ended', () => {
  localStorage.removeItem('localStorageKey');
});