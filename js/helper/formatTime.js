export default function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - (hours * 3600)) / 60);
  seconds = seconds - (minutes * 60) - (hours * 3600);
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  if (hours == 0 && minutes > 0) return `${minutes}:${seconds}`
  else if (hours == 0 && minutes == 0) return `${seconds}s`;
  return `${hours}:${minutes}:${seconds}`;
}
