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
  _clear() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * Get current value.
   * @abstract
   * @param {Date} date - Date instance.
   * @return {integer} Value.
   */
  _getCurrentValue(date) {}

  /**
   * Get delta value.
   * @abstract
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {}

  /**
   * Draw values line.
   * @param {Date} date - Date instance.
   */
  draw(date) {
    this._clear();
    let currentValue = this._getCurrentValue(date);
    let delta = this._getDeltaValue(date);
    for (let i = 0; i < 11; i++) {
      let x = 20 * i - delta;
      let value = currentValue + i;
      if (value > 59) {
        value -= 60;
      }
      if (value < 10) {
        value = `0${value}`;
      }
      this._ctx.fillText(value, x + 5, 15);
    }
  }
}


/** Minutes line draw class. */
class MinutesDrawer extends BaseDrawer {

  /**
   * Get current minute value.
   * @param {Date} date - Date instance.
   * @return {integer} Minute value.
   */
  _getCurrentValue(date) {
    return date.getMinutes();
  }

  /**
   * Get minute delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round(date.getSeconds() / 3);
  }
}


/** Seconds line draw class. */
class SecondsDrawer extends BaseDrawer {

  /**
   * Get current second value.
   * @param {Date} date - Date instance.
   * @return {integer} Second value.
   */
  _getCurrentValue(date) {
    return date.getSeconds();
  }

  /**
   * Get second delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round(date.getMilliseconds() / 50);
  }
}
