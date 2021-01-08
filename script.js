function updateClock() {
  let now = new Date();
  let day = now.getDay();
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let period = 'AM';

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    period = 'PM';
  }

  Number.prototype.pad = function (digits) {
    for (var num = this.toString(); num.length < digits; num = 0 + num);
    console.log('digits: ', digits);
    return num;
  };
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const ids = [
    'dayname',
    'month',
    'daynum',
    'year',
    'hour',
    'minutes',
    'seconds',
    'period'
  ];
  const values = [
    week[day],
    months[month],
    date.pad(2),
    year.pad(2),
    hour.pad(2),
    minute.pad(2),
    second.pad(2),
    period
  ];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

updateClock();
setInterval(updateClock, 1000);
