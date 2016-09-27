function Decorator(decoratee) {
	this.decoratee = decoratee;
}

Decorator.prototype.decorate = function(method, callback) {
  this.decoratee[method] = (dec => function() {
    callback.apply(this, arguments);
    Object.getPrototypeOf(dec)[method].apply(this, arguments);
  })(this.decoratee);
}

Decorator.prototype.undecorate = function(method) {
	delete this.decoratee[method];
}

module.exports = Decorator;