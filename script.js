let intervalId;
let isRunning = false;
let seconds = 0;

function updateStopwatch() {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  let stopwatchDisplay = hours + ':' + minutes + ':' + remainingSeconds;
  document.getElementById('watch').textContent = stopwatchDisplay;

  seconds++;
}

function startStopwatch() {
  if (!isRunning) {
    // Start the stopwatch
    intervalId = setInterval(updateStopwatch, 1000);
    isRunning = true;
  }
}

function stopStopwatch() {
  if (isRunning) {
    // Stop the stopwatch
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetStopwatch() {
  // Reset the stopwatch
  clearInterval(intervalId);
  isRunning = false;
  seconds = 0;
  updateStopwatch();
}

// Initial call to set the time immediately
updateStopwatch();