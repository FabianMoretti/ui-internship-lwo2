/* eslint "require-jsdoc": 0 */
export class SimTime {
  constructor() {
    this.time = 0;
    this.realTime = 0;
    this.speed = 1;
  }
  get() {
    return this.time;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(time) {
    const newTime = this.time + (time - this.realTime) * this.speed;
    this.time = newTime;
    this.realTime = time;
  }
}
