function angleCalculation(a, b) {
    return 180 - (a + b);
}

function reverseWords(str) {

    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('hello world'));