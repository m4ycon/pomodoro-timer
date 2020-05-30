import formatTime from '../helper/formatTime.js';
import stageView from '../view/stageView.js';

const clock = document.querySelector('#clock');

const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');
const setTimeBtn = document.querySelector('#setTimeBtn');

const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';


// SETTINGS
let workT = 25 * 60;
let restT = 5 * 60;
let longRestT = 15 * 60;

// FIXED
let runTime = false;
let seconds = workT;
let stage = 1; // even: rest // odd: work // 8: long-rest 

// INICIALIZATION
stageView(stage);
clock.innerHTML = formatTime(seconds);

function resetCycle() {
  seconds = workT;
  runTime = false;
  stageView(stage);
  stage = 1;
  stageView(stage);
  playBtn.innerHTML = playIcon;
  clock.innerHTML = formatTime(seconds);
}

function alarm() {
  let alarm = new Audio('../../mp3/foghorn-daniel_simon.mp3');
  alarm.play();
}

function isNumAndPositive(num) {
  return !isNaN(num.replace(/,/g, '.')) && num.replace(/,/g, '.') > 0;
}

playBtn.onclick = () => {
  runTime = !runTime;
  if (runTime) playBtn.innerHTML = pauseIcon
  else playBtn.innerHTML = playIcon;
}

resetBtn.onclick = resetCycle;

setTimeBtn.onclick = () => {
  let workInput = document.querySelector('#workInput');
  let restInput = document.querySelector('#restInput');
  let lRestInput = document.querySelector('#lRestInput');

  if (!isNumAndPositive(workInput.value) ||
    !isNumAndPositive(restInput.value) ||
    !isNumAndPositive(lRestInput.value)) {
    alert('Invalid time, please try again.')
  } else {
    workT = Math.round(workInput.value.replace(/,/g, '.') * 60);
    restT = Math.round(restInput.value.replace(/,/g, '.') * 60);
    longRestT = Math.round(lRestInput.value.replace(/,/g, '.') * 60);
    resetCycle();
  }
  workInput.value = '';
  restInput.value = '';
  lRestInput.value = '';
}

setInterval(function () {
  if (runTime && seconds >= 0) {

    seconds--;
    clock.innerHTML = formatTime(seconds);

    if (seconds == 0) {
      stageView(stage);
      if (stage == 7) {
        seconds = longRestT;
        stage++;
      } else if (stage == 8) {
        seconds = workT;
        stage = 1;
      } else {
        if (stage % 2 != 0) seconds = restT
        else seconds = workT;
        stage++;
      }
      stageView(stage);
      alarm();
      seconds++;

    }

  };
}, 1000);

export default {};