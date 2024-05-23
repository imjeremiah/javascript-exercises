const palindromes = function (string) {
    let updatedString = string.replace(/[\.,?!-\s]/g, "").toLowerCase();
    let reversedString = updatedString.split("").reverse().join("");
    console.log(updatedString);

    return reversedString === updatedString;
};

// Do not edit below this line
module.exports = palindromes;
