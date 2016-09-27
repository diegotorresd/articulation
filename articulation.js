'use strict'
function Element(domElement) {
  this.domElement = domElement;
}

Element.prototype = {
  constructor : Element,
  getPosition : function() {
    return {x : this.domElement.offsetLeft,
            y : this.domElement.offsetTop };
  },
  setPosition : function(pos) {
    this.domElement.style.left = pos.x;
    this.domElement.style.top = pos.y;
    this.notify(pos);
  }
}

function getEventPos(event) {
  var _x = event.offsetX, _y = event.offsetY;
  if (event.srcElement !== surface) {
    var elementPos = element.getPosition();
    _x += elementPos.x;
    _y += elementPos.y;
  }
  return { x: _x, y: _y };
}
