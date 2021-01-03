/** Base draw number logic. */
class BaseNumber {

  /**
   * Create.
   * @param {string} canvasId - Canvas id.
   */
  constructor(drawer, dx, dy) {
    this._drawer = drawer;
    this._dx = dx;
    this._dy = dy;
    this._draw();
  }

  /** Draw number shape. */
  _draw() {
    this._drawer.ctx.fillStyle = '#534e52';
    this._drawer.ctx.lineWidth = 2 * SCALE;
    this._drawShape();
  }

  /**
   * Draw number shape.
   * @abstract
   */
  _drawShape() {}
}


/** Draw zero logic. */
class Zero extends BaseNumber {

  /**
   * Draw zero shape.
   *
   * # # #
   * #   #
   * #   #
   * #   #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw one logic. */
class One extends BaseNumber {

  /**
   * Draw one shape.
   *
   *   #
   * # #
   *   #
   *   #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 8) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 5) * SCALE, (this._dy + 8) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 6) * SCALE, (this._dy + 5) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 6) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw two logic. */
class Two extends BaseNumber {

  /**
   * Draw two shape.
   *
   * # # #
   *     #
   * # # #
   * #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 9) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 9) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 3) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 11) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw three logic. */
class Three extends BaseNumber {

  /**
   * Draw three shape.
   *
   * # # #
   *     #
   * # # #
   *     #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw four logic. */
class Four extends BaseNumber {

  /**
   * Draw four shape.
   *
   * #   #
   * #   #
   * # # #
   *     #
   *     #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 5) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 11) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 5) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 5) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 15) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw five logic. */
class Five extends BaseNumber {

  /**
   * Draw five shape.
   *
   * # # #
   * #
   * # # #
   *     #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 9) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 9) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 3) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 11) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw six logic. */
class Six extends BaseNumber {

  /**
   * Draw six shape.
   *
   * # # #
   * #
   * # # #
   * #   #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 15) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 5) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 5) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 9) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 15) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw seven logic. */
class Seven extends BaseNumber {

  /**
   * Draw seven shape.
   *
   * # # #
   *     #
   *     #
   *     #
   *     #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 15) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw eight logic. */
class Eight extends BaseNumber {

  /**
   * Draw eight shape.
   *
   * # # #
   * #   #
   * # # #
   * #   #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 9) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 13) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 5) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.stroke();
  }
}


/** Draw nine logic. */
class Nine extends BaseNumber {

  /**
   * Draw nine shape.
   *
   * # # #
   * #   #
   * # # #
   *     #
   * # # #
   *
   */
  _drawShape() {
    this._drawer.ctx.beginPath();
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 9) * SCALE, (this._dy + 6) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 8) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 8) * SCALE, (this._dy + 15) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 4) * SCALE, (this._dy + 7) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 4) * SCALE, (this._dy + 11) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 5) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 10) * SCALE);
    this._drawer.ctx.moveTo((this._dx + 3) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.lineTo((this._dx + 7) * SCALE, (this._dy + 14) * SCALE);
    this._drawer.ctx.stroke();
  }
}
