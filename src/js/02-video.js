import Player from '@vimeo/player';
const videoPlayer = document.querySelector("#vimeo-player");

// Отримайте поточний час відтворення відео
const currentTime = videoPlayer.currentTime;

// Збережіть поточний час відтворення в локальному сховищі
localStorage.setItem('videoCurrentTime', currentTime);

// Відслідковуйте подію завантаження відео
videoPlayer.addEventListener('loadedmetadata', () => {
  // Отримайте збережений час відтворення з локального сховища
  const savedTime = localStorage.getItem('videoCurrentTime');

  // Якщо є збережений час відтворення, встановіть його
  if (savedTime !== null) {
    videoPlayer.currentTime = parseFloat(savedTime);
  }

  // Почніть відтворення відео
  videoPlayer.play();
});

// Видаліть збережений час відтворення при завершенні відтворення відео
videoPlayer.addEventListener('ended', () => {
  localStorage.removeItem('videoCurrentTime');
});