function angleCalculation(a, b) {
    return 180 - (a + b);
}

function reverseWords(str) {

    return str.split(' ').reverse().join(' ');
}

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

for (let i = 0; i <= 10; i++) {
    console.log(`Число ${i} = ${i % 2}`);
}

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}