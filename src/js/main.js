document.addEventListener('DOMContentLoaded', (e) => {
  let hours = new HoursDrawer('hours-line');
  let minutes = new MinutesDrawer('minutes-line');
  let seconds = new SecondsDrawer('seconds-line');

  setInterval(() => {
    let date = new Date();
    hours.draw(date);
    minutes.draw(date);
  }, 1000);

  setInterval(() => {
    let date = new Date();
    seconds.draw(date);
  }, 50);
});
