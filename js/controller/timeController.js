import formatTime from '../helper/formatTime.js';
import stageView from '../view/stageView.js';

const clock = document.querySelector('#clock');

const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');
const setTimeBtn = document.querySelector('#setTimeBtn');

const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';


// SETTINGS
let workT = 25;
let restT = 5;
let longRestT = 15;

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

setTimeBtn.onclick = function() {
  let workInput = document.querySelector('#workInput');
  let restInput = document.querySelector('#restInput');
  let lRestInput = document.querySelector('#lRestInput');
  workT = workInput.value;
  restT = restInput.value;
  longRestT = lRestInput.value;
  workInput.value = '';
  restInput.value = '';
  lRestInput.value = '';
  resetCycle();
}

playBtn.onclick = () => {
  runTime = !runTime;
  if (runTime) playBtn.innerHTML = pauseIcon
  else playBtn.innerHTML = playIcon;
}

resetBtn.onclick = resetCycle;

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
      seconds++;

    }

  };
}, 100);

export default {};