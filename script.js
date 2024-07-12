const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const audio = document.getElementById('myAudio');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
  if (envelope.classList.contains('flap')) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});