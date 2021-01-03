/** Base draw logic. */
class BaseDrawer {
  static NEW_ITEM_EVENT = null;
  static NUMBERS = {
    '0': Zero,
    '1': One,
    '2': Two,
    '3': Three,
    '4': Four,
    '5': Five,
    '6': Six,
    '7': Seven,
    '8': Eight,
    '9': Nine,
  };

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    this.tl = timeline;
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', `${20 * this.tl.scale}px`);
    this._canvas.setAttribute('height', `${80 * this.tl.scale}px`);
    this.tl.wrapper.appendChild(this._canvas);
    this._ctx = this._canvas.getContext('2d');
    this._lastValue = null;
  }

  /**
   * Canvas 2d context.
   * @return {Object} 2d context.
   */
  get ctx() {
    return this._ctx;
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
    if (!this._lastValue || this._lastValue != currentValue) {
      if (this.constructor.NEW_ITEM_EVENT) {
        document.dispatchEvent(this.constructor.NEW_ITEM_EVENT);
      }
      this._lastValue = currentValue;
    }
    let delta = this._getDeltaValue(date);
    for (let i = -2; i <= 2; i++) {
      let y = 60 - 20 * (i + 2) + delta;

      this._ctx.fillStyle = this.tl.colors.light;
      this._ctx.fillRect(1 * this.tl.scale, (y + 1) * this.tl.scale, 18 * this.tl.scale, 18 * this.tl.scale);

      let value = this._getValue(currentValue, i);
      if (value < 10) {
        value = `0${value}`;
      } else {
        value = value.toString();
      }
      new this.constructor.NUMBERS[value[0]](this, 0, y);
      new this.constructor.NUMBERS[value[1]](this, 8, y);
    }
  }
}


/** Base solid numbers draw logic. */
class BaseSolidNumbersDrawer extends BaseDrawer {
  static NEW_ITEM_EVENT = null;

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   * @param {integer|null} maxValue - Maximal value.
   */
  constructor(timeline, maxValue) {
    super(timeline);
    this._maxValue = maxValue;
  }

  /**
   * Get value.
   * @param {integer} currentValue - Current value.
   * @param {integer} index - Value index.
   * @return {integer} Value.
   */
  _getValue(currentValue, index) {
    let value = currentValue + index;
    if (this._maxValue) {
      if (value > this._maxValue - 1) {
        value -= this._maxValue;
      } else if (value < 0) {
        value += this._maxValue;
      }
    }
    return value;
  }
}


/** Years line draw class. */
class YearsDrawer extends BaseSolidNumbersDrawer {
  static NEW_ITEM_EVENT = new Event('newYear');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline, null);
    document.addEventListener('newDay', (e) => {
      this.draw(new Date);
    });
  }

  /**
   * Get current year value.
   * @param {Date} date - Date instance.
   * @return {integer} Year value.
   */
  _getCurrentValue(date) {
    return date.getYear() % 100;
  }

  /**
   * Get year delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round((date.getMonth() * 30 + date.getDate()) / 18);
  }
}


/** Months line draw class. */
class MonthsDrawer extends BaseSolidNumbersDrawer {
  static NEW_ITEM_EVENT = new Event('newMonth');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline, 12);
    document.addEventListener('newDay', (e) => {
      this.draw(new Date);
    });
  }

  /**
   * Get current month value.
   * @param {Date} date - Date instance.
   * @return {integer} Month value.
   */
  _getCurrentValue(date) {
    return date.getMonth();
  }

  /**
   * Get month delta value.
   * @param {Date} date - Date instance.
   * @return {integer} Delta value.
   */
  _getDeltaValue(date) {
    return Math.round(date.getDate() / 1.5);
  }

  /**
   * Get value.
   * @param {integer} currentValue - Current value.
   * @param {integer} index - Value index.
   * @return {integer} Value.
   */
  _getValue(currentValue, index) {
    return super._getValue(currentValue, index) + 1;
  }
}


/** Days line draw class. */
class DaysDrawer extends BaseDrawer {
  static NEW_ITEM_EVENT = new Event('newDay');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline);
    document.addEventListener('newHour', (e) => {
      this.draw(new Date);
    });
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
  static NEW_ITEM_EVENT = new Event('newHour');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline, 24);
    document.addEventListener('newMinute', (e) => {
      this.draw(new Date);
    });
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
  static NEW_ITEM_EVENT = new Event('newMinute');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline, 60);
    document.addEventListener('newSecond', (e) => {
      this.draw(new Date);
    });
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
  static NEW_ITEM_EVENT = new Event('newSecond');

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    super(timeline, 60);
    setInterval(() => {
      let date = new Date();
      this.draw(date);
    }, 50);
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
