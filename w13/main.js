/*
KEY
  30 = 30 seconds
  60 = 1 minute
  90 = 1 minute and 30 seconds
  120 = 2 minutes
  150 = 2 minutes and 30 seconds
  180 = 3 minutes

  Broken up by 1 minute = 60 seconds
  Broken up by half a minute = 30 seconds

  Set Timeout times:
    1 millisecond = 1000
    1 Second = 10000
    1 Minute = 60000
*/
import { TIMERS } from "./timer.js";
window.onload = () => {
  const FORM = document.querySelector("form");
  const durationValue = document.getElementById("durationVal");
  const durationInput = FORM.querySelector('[name="duration"]');

  durationInput.addEventListener("input", (e) => {
    const value = TIMERS.find((timer) => timer.value === e.target.value).text;
    durationValue.textContent = value;
  });

  FORM.addEventListener("submit", submission);
};

function submission(evt) {
  evt.preventDefault();
  if (document.getElementById("templateWrapper")) {
    document.getElementById("templateWrapper").remove();
  }
  const submitBtn = evt.target.querySelector("button");
  submitBtn.disabled = true;
  const exerciseType = evt.target.exercise.value;
  const reps = evt.target.reps.value;
  createExerciseView(exerciseType, reps);
  const properties = {
    inputDuration: evt.target.duration.value,
    inputSound: evt.target.sound,
    button: submitBtn,
  };
  handleTiming(properties, next);
}

function handleTiming({ inputDuration, inputSound, button }, next) {
  const duration = TIMERS.find((timer) => timer.value === inputDuration).time;
  const withSound = inputSound.checked;
  const countdownEl = document.getElementById("countdown");
  const iconEl = document.getElementById("icon");
  const data = setLoopingData(parseInt(inputDuration));
  handleInterval(data.loops, data.time, countdownEl);
  setTimeout(() => {
    // For fun, I decided to add a short notification sound when the timer reaches zero. This set timeout is helpful for cleaning up/adding final code when duration ends.
    if (withSound) {
      const audio = new Audio("aj_heels__timercomplete.wav");
      audio.play();
      audio.remove();
    }
    button.disabled = false;
    iconEl.textContent = "💯";
    countdownEl.textContent = "Completed!";
    next();
  }, duration);
}

function setLoopingData(value) {
  // Looping is important because if its 1 minute or less, you don't have to go through a countdown from 60 to 0 more than once; however, if its over 1 minute (60), then you must loop an x amount of times, based on selected time. the highest will be 2 times because of 3 minutes.
  let loops = value === 180 ? 2 : value === 30 || value === 60 ? 0 : 1;
  let time = value;
  return Object.assign(
    {},
    {
      loops,
      time,
    }
  );
}

function handleInterval(loops, time, countdownEl) {
  // Seconds can be either 60 or 30; how we determine is those who will start with 30 seconds like, 30 seconds, or 1 minute and 30 seconds (90); otherwise, set as 60 since 1 minute, 2 minutes, and 3 minutes need it
  let seconds = time === 30 ? 30 : time === 90 ? 30 : time === 150 ? 30 : 60;
  let t = time;
  let l = loops;
  // Interval will loop every seccond to change the countdown text as the values change. The above helps maintain that when loops and seconds reach zero, to stop looping.
  let initInt = setInterval(() => {
    if (l === 0 && seconds === 0) {
      clearInterval(initInt);
      initInt = null;
      return;
    }
    if (seconds === 0 && l <= loops) {
      l--;
      seconds = 60;
    }
    const c = setCountdown(seconds, t);
    countdownEl.textContent = c;
    seconds--;
    t--;
  }, 1000);
}

function setCountdown(seconds, countdown) {
  let crString = (min) =>
    `${min}:${seconds === 60 ? "00" : seconds >= 10 ? seconds : `0${seconds}`}`;
  if (countdown < 60) {
    return crString("00");
  } else if (countdown >= 60 && countdown < 120) {
    return crString("01");
  } else if (countdown < 180 && countdown >= 120) {
    return crString("02");
  } else if (countdown >= 180) {
    return crString("03");
  }
}

function cloneTemplate() {
  const template = document.getElementById("template");
  const clone = template.content.cloneNode(true);
  return clone;
}

function createExerciseView(title, reps) {
  const clone = cloneTemplate();
  const titleEl = clone.getElementById("exerciseTitle");
  const repsEl = clone.getElementById("reps");
  const iconEl = clone.getElementById("icon");
  titleEl.textContent = title;
  repsEl.textContent = reps;
  iconEl.textContent = "💪";
  iconEl.style.fontSize = "3.8rem";
  const section = document.body.querySelector("section");
  section.appendChild(clone);
}

function next() {
  const FORM = document.querySelector("form");
  FORM.reset();
}
