var day = document.getElementById("days");
var hour = document.getElementById("hours");
var min = document.getElementById("mins");
var second = document.getElementById("seconds");
var year = document.getElementById("year");
function countdown() {
  const yearNew = new Date().getFullYear();
  let newYears = "1 Jan " + Number(yearNew + 1);
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds % 60);
  day.innerHTML = days;
  hour.innerHTML = hours;
  mins.innerHTML = minutes;
  second.innerHTML = seconds;
  year.innerHTML = 'Countdown NewYear '+(yearNew+1)
}
setInterval(countdown, 1000);
