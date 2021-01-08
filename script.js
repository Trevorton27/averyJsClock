function updateClock() {
  const now = new Date();

  const hour = document.getElementById('hour');
  const minute = document.getElementById('minutes');
  const second = document.getElementById('seconds');
  const period = document.getElementById('period');

  let getHour = now.getHours();
  let getMinute = now.getMinutes();
  let getSecond = now.getSeconds();
  let getPeriod = getHour > 12 ? 'PM' : 'AM';

  hour.textContent = getHour > 12 ? getHour - 12 : getHour;
  minute.textContent = getMinute < 10 ? `0${getMinute}` : getMinute;
  second.textContent = getSecond < 10 ? `0${getSecond}` : getSecond;
  period.textContent = getPeriod;
}

function updateDate() {
  const now = new Date();

  const year = document.getElementById('year');
  const month = document.getElementById('month');
  const day = document.getElementById('dayname');
  const date = document.getElementById('daynum');

  const getYear = now.getFullYear();
  const getMonth = now.toLocaleString('default', { month: 'long' });
  const getDay = now.toLocaleString('default', { weekday: 'long' });
  const getDate = now.getDate();

  year.textContent = getYear;
  month.textContent = getMonth;
  day.textContent = getDay;
  date.textContent = getDate < 10 ? `0${getDate}` : getDate;
}

function runClock() {
  updateClock();
  updateDate();
}

updateClock();

window.setInterval(runClock, 1000);
