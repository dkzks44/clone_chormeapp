const clockTitle = document.querySelector(".js-clock");

function calculate() {
  const date = new Date();
  const bet = date.getFullYear();
  const christmas = new Date(`Dec 25 ${bet} 00:00:00 GMT+0900`);

  const result = christmas.getTime() - date.getTime();
  const dayResult = result / (1000 * 60 * 60 * 24);
  const dDay = Math.floor(dayResult);
  const hourResult = (dayResult - dDay) * 24;
  const hour = String(Math.floor(hourResult)).padStart(2, "0");
  const minuteResult = (hourResult - hour) * 60;
  const minute = String(Math.floor(minuteResult)).padStart(2, "0");
  const secondResult = (minuteResult - minute) * 60;
  const second = String(Math.floor(secondResult)).padStart(2, "0");

  clockTitle.innerText = `${dDay}d ${hour}h ${minute}m ${second}s`;
}

calculate();
setInterval(calculate, 1000);