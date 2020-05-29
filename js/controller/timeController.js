import formatTime from '../helper/formatTime.js';

const clock = document.querySelector('.clock');

const playBtn = document.querySelector('#play-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');

let runTime = true;

playBtn.onclick = () => {
  runTime = !runTime;
  if (runTime) playBtn.innerHTML = '<i class="fas fa-pause"></i>'
  else playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

let seconds = 25*60;
setInterval(function() {
  if (runTime) seconds--;
  clock.innerHTML = formatTime(seconds);
}, 1000);

export default {};