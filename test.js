function Foo() {}

Foo.prototype.m = function() {}

/**
 * @param {Foo} x
 */
function f(x) {
  x.m();
}
