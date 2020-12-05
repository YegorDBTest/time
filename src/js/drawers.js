/** Base draw logic. */
class BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   * @param {integer} maxValue - Maximal value.
   */
  constructor(canvasId, maxValue) {
    this._canvas = document.getElementById(canvasId);
    this._ctx = this._canvas.getContext('2d');
    this._maxValue = maxValue;
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
      if (value > this._maxValue - 1) {
        value -= this._maxValue;
      }
      if (value < 10) {
        value = `0${value}`;
      }
      this._ctx.fillText(value, x + 5, 15);
    }
  }
}


/** Hours line draw class. */
class HoursDrawer extends BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(canvasId) {
    super(canvasId, 24);
  }

  /**
   * Get current hour value.
   * @param {Date} date - Date instance.
   * @return {integer} Hour value.
   */
  _getCurrentValue(date) {
    return date.getHours();
  }

  /**
   * Get hour delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round(date.getMinutes() / 3);
  }
}


/** Minutes line draw class. */
class MinutesDrawer extends BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(canvasId) {
    super(canvasId, 60);
  }

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
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(canvasId) {
    super(canvasId, 60);
  }

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
