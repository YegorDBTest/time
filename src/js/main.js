document.addEventListener('DOMContentLoaded', (e) => {
  let seconds = new SecondsDrawer('seconds-line');

  setInterval(() => {
    let date = new Date();
    seconds.draw(date);
  }, 50);
});
