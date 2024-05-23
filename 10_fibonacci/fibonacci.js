const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    let curr = 1;
    let num1 = 1;
    let num2 = 1;

    for (let i = 2; i < num; i++) {
        num2 = num1;
        num1 = curr;
        curr = num1 + num2;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
