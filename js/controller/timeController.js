import formatTime from '../helper/formatTime.js';

const clock = document.querySelector('.clock');

const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');

const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';

let runTime = false;
let seconds = 1;
let stage = 1; // 0: long-rest // 2,4,6:rest // 1,3,5,7:work

playBtn.onclick = () => {
  runTime = !runTime;
  if (runTime) playBtn.innerHTML = pauseIcon
  else playBtn.innerHTML = playIcon;
}

resetBtn.onclick = () => {
  seconds = 25 * 60;
  stage = 1;
  runTime = true;
  playBtn.innerHTML = pauseIcon;
}

setInterval(function () {
  if (runTime && seconds >= 0) {

    seconds--;
    clock.innerHTML = formatTime(seconds);

    if (seconds == 0) {
      if (stage == 0) seconds = 15 * 60;
      if (stage == 1 || stage == 3 || stage == 5) seconds = 25 * 60;
      if (stage == 2 || stage == 4 || stage == 6) seconds = 5 * 60;
      if (stage == 7) {
        seconds = 25 * 60 + 1;
        stage = 0;
      } else {
        seconds++;
        stage++;
      }
    }

  };
}, 5);

export default {};