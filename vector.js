import { HEIGHT, WIDTH } from "./constants.js";
import { drawLine } from "./render.js";
export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    let dx = Math.pow(this.x, 2);
    let dy = Math.pow(this.y, 2);
    return Math.pow(dx + dy, 0.5);
  }

  rotateVector(alpha) {
    let cos = Math.cos(alpha);
    let sin = Math.sin(alpha);
    let x = this.x * cos - this.y * sin;
    let y = this.x * sin + this.y * cos;
    return new Vector(x, y);
  }

  multiplyVector(number) {
    let x = this.x * number;
    let y = this.y * number;
    return new Vector(x, y);
  }

  addVector(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  pickColor(max_vector_length) {
    const length = this.length();
    let percent = length / max_vector_length * 100;
    percent = percent > 100 ? 100 : percent;
    return this.percentToColor(percent);
  }

  percentToColor(percent) {
    let r,
        g,
        b = 0;

    if (percent < 50) {
      r = 255;
      g = Math.round(5.1 * percent);
    } else {
      g = 255;
      r = Math.round(510 - 5.10 * percent);
    }

    let h = r * 0x10000 + g * 0x100 + b;
    return '#' + ('000000' + h.toString(16)).slice(-6);
  }

}