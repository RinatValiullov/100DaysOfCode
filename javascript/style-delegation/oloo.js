let Widget = {
  init(height, width) {
    this.height = height;
    this.width = width;
    this.$elem = null;
  },
  insert($where) {
    if (this.$elem) {
      this.$elem.style.cssText = `height: ${this.height}px; width: ${this.width}px;`;

      $where.appendChild(this.$elem);
    }
  }
};

let Button = Object.create(Widget);

Button.setup = function(height, width, label = 'Default label') {
  // delegated call
  this.init(height, width);
  this.label = label;

  this.$elem = document.createElement('button');
  this.$elem.innerText = this.label;
};

Button.build = function($where) {
  // delegated call
  this.insert($where);
  this.$elem.addEventListener('click', this.onClick.bind(this));
};

Button.onClick = function(event) {
  console.log(`Button "${this.label}" clicked!`);
};

let body = document.querySelector('body');
let btn1 = Object.create(Button);
btn1.setup(50, 150, 'Hello');

let btn2 = Object.create(Button);
btn2.setup(30, 110, 'World');

btn1.build(body);
btn2.build(body);
