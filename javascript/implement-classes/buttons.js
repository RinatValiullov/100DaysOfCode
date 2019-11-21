import { Widget } from './widget';

// Child class
function Button(width, height, label) {
  // "super" constructor call
  Widget.call(this, width, height);
  this.label = label || 'Default';

  this.$elem = document.createElement('button');
  this.$elem.innerText = this.label;
}

// make `Button` "inherit" from `Widget`
Button.prototype = Object.create(Widget.prototype);

// override base "inherited" `render(..)`
Button.prototype.render = function($where) {
  console.log(this);
  // "super" call
  Widget.prototype.render.call(this, $where);
  this.$elem.addEventListener('click', this.onClick.bind(this));
};

Button.prototype.onClick = function(event) {
  console.log(`Button "${this.label}" clicked!`);
};

let body = document.querySelector('body');
let btn1 = new Button(125, 55, 'Hello');
let btn2 = new Button(150, 75, 'JavaScript');

btn1.render(body);
btn2.render(body);
