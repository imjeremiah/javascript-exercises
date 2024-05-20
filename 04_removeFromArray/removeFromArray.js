const removeFromArray = function(array, ...args) {

    for (const item of array) {
        for (const arg of args) {
            if (array.includes(arg)) {
                array.splice(array.indexOf(arg), 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
