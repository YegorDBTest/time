document.addEventListener('DOMContentLoaded', (e) => {
  new Timeline('timer', {
    scale: Math.max(1, Math.min(Math.floor(window.innerWidth / 120), Math.floor(window.innerHeight / 80)) - 3),
  });
});
