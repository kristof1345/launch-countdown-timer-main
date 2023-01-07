const deadline = new Date("jan 15, 2023 14:00:00").getTime();
const dayDiv = document.querySelector("#days");
const hourDiv = document.querySelector("#hours");
const minDiv = document.querySelector("#minutes");
const secDiv = document.querySelector("#secs");

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = deadline - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayDiv.textContent = days;
  hourDiv.textContent = hours;
  minDiv.textContent = minutes;
  secDiv.textContent = seconds;

  if (dayDiv.textContent.length === 1) {
    dayDiv.textContent = "0" + days;
  }
  if (hourDiv.textContent.length === 1) {
    hourDiv.textContent = "0" + hours;
  }
  if (minDiv.textContent.length === 1) {
    minDiv.textContent = "0" + minutes;
  }
  if (secDiv.textContent.length === 1) {
    secDiv.textContent = "0" + seconds;
  }

  if (distance < 0) {
    clearInterval(x);
    dayDiv.textContent = "00";
    hourDiv.textContent = "00";
    minDiv.textContent = "00";
    secDiv.textContent = "00";
  }
});
