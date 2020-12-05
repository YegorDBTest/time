/** Base draw logic. */
class BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(canvasId) {
    this._canvas = document.getElementById(canvasId);
    this._ctx = this._canvas.getContext('2d');
  }

  /** Clear canvas. */
  clear() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}


/** Seconds line draw class. */
class SecondsDrawer extends BaseDrawer {

  /**
   * Draw seconds line.
   * @param {Date} date - Date instance.
   */
  draw(date) {
    this.clear();
    let currentSecond = date.getSeconds();
    let delta = Math.round(date.getMilliseconds() / 50);
    for (let i = 0; i < 11; i++) {
      let x = 20 * i - delta;
      let second = currentSecond + i;
      if (second > 59) {
        second -= 60;
      }
      if (second < 10) {
        second = `0${second}`;
      }
      this._ctx.fillText(second, x + 5, 15);
    }
  }
}
