const SCALE = Math.max(1, Math.min(Math.floor(window.innerWidth / 120), Math.floor(window.innerHeight / 80)) - 3);


/** Draw time net. */
function drawNet() {
  let canvas = document.getElementById('net');
  canvas.setAttribute('width', `${120 * SCALE}px`);
  canvas.setAttribute('height', `${80 * SCALE}px`);
  let ctx = canvas.getContext('2d');

  let topGradient = ctx.createLinearGradient(0, 0, 0, 30 * SCALE);
  topGradient.addColorStop(0, '#534e52ff');
  topGradient.addColorStop(1, '#534e5280');
  ctx.fillStyle = topGradient;
  ctx.fillRect(0, 0, 120 * SCALE, 30 * SCALE);

  ctx.strokeStyle = '#534e52';
  ctx.beginPath();
  ctx.moveTo(0, 40 * SCALE);
  ctx.lineTo(120 * SCALE, 40 * SCALE);
  ctx.stroke();

  let botGradient = ctx.createLinearGradient(0, 50 * SCALE, 0, 80 * SCALE);
  botGradient.addColorStop(0, '#534e5280');
  botGradient.addColorStop(1, '#534e52ff');
  ctx.fillStyle = botGradient;
  ctx.fillRect(0, 50 * SCALE, 120 * SCALE, 80 * SCALE);
}


document.addEventListener('DOMContentLoaded', (e) => {
  drawNet();

  let drawers = [
    new YearsDrawer('years-line'),
    new MonthsDrawer('months-line'),
    new DaysDrawer('days-line'),
    new HoursDrawer('hours-line'),
    new MinutesDrawer('minutes-line'),
    new SecondsDrawer('seconds-line'),
  ];

  let date = new Date();
  for (let drawer of drawers) {
    drawer.draw(date);
  }
});
