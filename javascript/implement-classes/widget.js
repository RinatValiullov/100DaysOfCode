// Parent class
export function Widget(width, height) {
  this.width = width;
  this.height = height;
  this.$elem = null;
}

Widget.prototype.render = function($where) {
  let targetElement = this.$elem;
  if (targetElement) {
    targetElement.style.cssText = `height: ${this.height}px; width: ${this.width}px`;

    $where.appendChild(targetElement);
  }
};
