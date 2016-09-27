const Decorator = require('./decorator.js');

function Person(name) {
  this.name = name;
}

Person.prototype.sayname = function (you) {
	you = you || "dawg";
  console.log("hello " + you +", I am " + this.name);
};

var p = new Person("jacko");
var decorator = new Decorator(p);

decorator.decorate("sayname", (arg) => console.log("yeah, " + arg))

p.sayname("mary");

decorator.undecorate("sayname");
p.sayname();