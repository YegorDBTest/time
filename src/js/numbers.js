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
    this._drawer.ctx.lineWidth = 2 * this._drawer.scale;
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 8) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 5) * this._drawer.scale, (this._dy + 8) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 6) * this._drawer.scale, (this._dy + 5) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 6) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 9) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 9) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 3) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 11) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 5) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 11) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 5) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 5) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 15) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 9) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 9) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 3) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 11) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 15) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 5) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 5) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 9) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 15) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 15) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 9) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 13) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 5) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
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
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 9) * this._drawer.scale, (this._dy + 6) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 8) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 8) * this._drawer.scale, (this._dy + 15) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 4) * this._drawer.scale, (this._dy + 7) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 4) * this._drawer.scale, (this._dy + 11) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 5) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 10) * this._drawer.scale);
    this._drawer.ctx.moveTo((this._dx + 3) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.lineTo((this._dx + 7) * this._drawer.scale, (this._dy + 14) * this._drawer.scale);
    this._drawer.ctx.stroke();
  }
}
