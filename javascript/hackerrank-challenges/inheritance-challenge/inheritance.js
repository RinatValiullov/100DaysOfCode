class Rectangle {
  constructor(h, w) {
    this.h = h;
    this.w = w;
  }
}

Rectangle.prototype.area = function() {
  let area = this.h * this.w;
  return area;
};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}

let rectangle = new Rectangle(6, 3);
let rectArea = rectangle.area();
console.log(rectArea);

let square = new Square(6);
let squareArea = square.area();
console.log(squareArea);
