const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0) return 0;
	return array.reduce((acc, curr) => acc + curr);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;

	let factorial = num;

  while (num > 1) {
    factorial *= (num - 1);
    num--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
