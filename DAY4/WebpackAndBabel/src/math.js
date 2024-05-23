/* This comment will not be a part of prod bundle.js */

export class Point {
  constructor() {
    this.x = 100;
    this.y = 100;
  }
  printPoint() {
    console.log(`The point :[x:${this.x},Y:${this.y}]`);
  }
}

const PI = 3.14;

export var Add = (x, y) => x + y;
