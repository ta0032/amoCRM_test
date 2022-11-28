const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let seconds = Number(inputEl.value);
let timer;

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9+]/g, "");
});

buttonEl.addEventListener("click", () => {
  seconds = Number(inputEl.value);
  clearInterval(timer);
  createTimerAnimator();
});

const createTimerAnimator = () => {
  timer = setInterval(decreaseTime, 1000);
};

function decreaseTime() {
  let hou = Math.floor(seconds / 60 / 60);
  let min = Math.floor(seconds / 60) - hou * 60;
  let sec = seconds % 60;
  if (!isNaN(seconds)) {
    if (seconds <= 0) {
      timerEl.innerHTML = "Время закончилось!";
      setTimeout(bck, 3000);
      clearInterval(timer);
    } else {
      setTime(hou, min, sec);
      --seconds;
    }
  }
}

function setTime(hou, min, sec) {
  timerEl.innerHTML = `${Math.trunc(hou)}:${Math.trunc(min)}:${sec}`;
}

function bck() {
  timerEl.innerHTML = "hh:mm:ss";
}
