/** Draw time net. */
function drawNet() {
  let canvas = document.getElementById('net');
  let ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#888';
  ctx.beginPath();
  ctx.moveTo(40, 0);
  ctx.lineTo(40, 140);
  ctx.stroke();
}


document.addEventListener('DOMContentLoaded', (e) => {
  drawNet();

  let years = new YearsDrawer('years-line');
  let months = new MonthsDrawer('months-line');
  let days = new DaysDrawer('days-line');
  let hours = new HoursDrawer('hours-line');
  let minutes = new MinutesDrawer('minutes-line');
  let seconds = new SecondsDrawer('seconds-line');

  setInterval(() => {
    let date = new Date();
    years.draw(date);
    months.draw(date);
    days.draw(date);
    hours.draw(date);
    minutes.draw(date);
  }, 1000);

  setInterval(() => {
    let date = new Date();
    seconds.draw(date);
  }, 50);
});
