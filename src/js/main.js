/** Timeline screen drawer. */
class Screen {

  /**
   * Create.
   * @param {Object} timeline - Timeline object.
   */
  constructor(timeline) {
    this._tl = timeline;
    this._canvas = document.createElement('canvas');
    this._canvas.style.position = 'absolute';
    this._tl.wrapper.appendChild(this._canvas);
    this._canvas.setAttribute('width', `${120 * this._tl.scale}px`);
    this._canvas.setAttribute('height', `${80 * this._tl.scale}px`);
    this._ctx = this._canvas.getContext('2d');
    this._draw();
  }

  /** Draw screen. */
  _draw() {
    this._drawTopGradient();
    this._drawMidLine();
    this._drawBotGradient();
  }

  /** Draw top gradient. */
  _drawTopGradient() {
    let topGradient = this._ctx.createLinearGradient(0, 0, 0, 30 * this._tl.scale);
    topGradient.addColorStop(0, `${this._tl.colors.dark}ff`);
    topGradient.addColorStop(1, `${this._tl.colors.dark}80`);
    this._ctx.fillStyle = topGradient;
    this._ctx.fillRect(0, 0, 120 * this._tl.scale, 30 * this._tl.scale);
  }

  /** Draw bot gradient. */
  _drawBotGradient() {
    let botGradient = this._ctx.createLinearGradient(0, 50 * this._tl.scale, 0, 80 * this._tl.scale);
    botGradient.addColorStop(0, `${this._tl.colors.dark}80`);
    botGradient.addColorStop(1, `${this._tl.colors.dark}ff`);
    this._ctx.fillStyle = botGradient;
    this._ctx.fillRect(0, 50 * this._tl.scale, 120 * this._tl.scale, 80 * this._tl.scale);
  }

  /** Draw mid line. */
  _drawMidLine() {
    this._ctx.strokeStyle = this._tl.colors.dark;
    this._ctx.beginPath();
    this._ctx.moveTo(0, 40 * this._tl.scale);
    this._ctx.lineTo(120 * this._tl.scale, 40 * this._tl.scale);
    this._ctx.stroke();
  }
}


/** Timeline drawer. */
class Timeline {
  static SCREEN = Screen;
  static DRAWERS = {
    years: YearsDrawer,
    months: MonthsDrawer,
    days: DaysDrawer,
    hours: HoursDrawer,
    minutes: MinutesDrawer,
    seconds: SecondsDrawer,
  };

  /**
   * Create.
   * @param {string} wrapperId - Id of element to create timeline into.
   * @param {Object} [options] - Timeline creation options.
   * @param {integer} [options.scale=1] - Timeline scale.
   * @param {string} [options.lightColor="f2d974"] - Timeline light color.
   * @param {string} [options.darkColor="534e52"] - Timeline dark color.
   */
  constructor(wrapperId, options) {
    options = options || {};

    this.scale = options.scale || 1;
    this.colors = {
      light: options.lightColor || '#f2d974',
      dark: options.darkColor || '#534e52',
    };

    this.wrapper = document.getElementById(wrapperId);
    if (!this.wrapper) {
      throw Error(`Wrong wrapper id "${wrapperId}".`);
    }
    this.wrapper.style.display = 'flex';
    this.wrapper.style.width = 'max-content';
    this.wrapper.style.height = 'max-content';

    new this.constructor.SCREEN(this);
    let date = new Date();
    for (let DRAWER of Object.values(this.constructor.DRAWERS)) {
      let drawer = new DRAWER(this);
      drawer.draw(date);
    }
  }
}
