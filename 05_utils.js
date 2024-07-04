var adder = function (a, b) {
  return `this sum of the 2 nums is ${a + b}`
}

var counter = function (arr) {
  return "there are " + arr.length + " elements in the array"
}

// 导出
// module.exports.adder = adder
// module.exports.counter = counter
module.exports = {
  // counter: counter,
  // adder: adder
  counter,
  adder
}