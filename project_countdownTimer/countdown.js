let d1 = new Date("2028-07-14T00:00:00");

const counter = function () {
  let d2 = Date.now();
  let diff = d1 - d2;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let mins = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);
  let day_count = document.getElementById("days");
  let hour_count = document.getElementById("hours");
  let min_count = document.getElementById("minutes");
  let sec_count = document.getElementById("seconds");
  day_count.innerHTML = days;
  hour_count.innerHTML = hours;
  min_count.innerHTML = mins;
  sec_count.innerHTML = seconds;
};

setInterval(counter, 1000);
