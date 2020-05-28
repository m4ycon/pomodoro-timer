import formatTime from '../helper/formatTime.js';

const clock = document.querySelector('.clock');

let seconds = 0;
setInterval(function() {
  clock.innerHTML = formatTime(seconds);
  seconds++;
}, 1000);

export default {};