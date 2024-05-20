var MathModule = { PI: 3.14 };
var MathModule = (function (m) {
  m.Add = function (x, y) {
    return x + y;
  };

  m.Product = function (x, y) {
    return x * y;
  };

  function Subtract(x, y) {
    return x - y;
  }
  return m;
})(MathModule || {});
// var result = (function (x, y) {
//   return x + y;
// })(10, 20);
// console.log(result);
