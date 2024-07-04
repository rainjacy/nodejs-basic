function sayHi() {
  console.log('hi');
}

var sayBye = function(name) {
  console.log(name + ':bye');
}

function callFunction(callback, name) {
  callback(name);
}

// sayHi();
// sayBye();

// callFunction(sayBye, 'wang');
callFunction(function(name) {
  console.log(name + ":bye");
}, 'ding')