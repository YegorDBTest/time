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
   * Get value.
   * @abstract
   * @param {integer} currentValue - Current value.
   * @param {integer} index - Value index.
   * @return {integer|string} Value.
   */
  _getValue(currentValue, index) {}

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
      let value = this._getValue(currentValue, i);
      if (value < 10) {
        value = `0${value}`;
      }
      this._ctx.fillText(value, x + 5, 15);
    }
  }
}


/** Base solid numbers draw logic. */
class BaseSolidNumbersDrawer extends BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   * @param {integer} maxValue - Maximal value.
   */
  constructor(canvasId, maxValue) {
    super(canvasId);
    this._maxValue = maxValue;
  }

  /**
   * Get value.
   * @param {integer} currentValue - Current value.
   * @param {integer} index - Value index.
   * @return {integer|string} Value.
   */
  _getValue(currentValue, index) {
    let value = currentValue + index;
    if (value > this._maxValue - 1) {
      value -= this._maxValue;
    }
    return value;
  }
}


/** Days line draw class. */
class DaysDrawer extends BaseDrawer {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(canvasId) {
    super(canvasId);
  }

  /**
   * Get current unix time value.
   * @param {Date} date - Date instance.
   * @return {integer} Unix time.
   */
  _getCurrentValue(date) {
    return date.getTime();
  }

  /**
   * Get day delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round(date.getHours() / 1.2);
  }

  /**
   * Get day value.
   * @param {integer} unixValue - Unix time.
   * @param {integer} daysLeft - Days left since unixValue.
   */
  _getValue(unixValue, daysLeft) {
    return (new Date(unixValue + 86400000 * daysLeft)).getDate();
  }
}


/** Hours line draw class. */
class HoursDrawer extends BaseSolidNumbersDrawer {

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
class MinutesDrawer extends BaseSolidNumbersDrawer {

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
class SecondsDrawer extends BaseSolidNumbersDrawer {

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
