function angleCalculation(a, b) {
    return 180 - (a + b);
}

function reverseWords(str) {

    return str.split(' ').reverse().join(' ');
}

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Число ${i} = ${i % 2}`);
// }

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}

function noSpace(x) {
    return x.split(' ').join('');
}

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
    // return number % 2 ? "Odd" : "Even"
}

function openOrSenior(data) {
    let res = [];

    data.forEach(i => {
        if (i[0] >= 55 && i[1] > 7) {
            res.push("Senior");
        } else {
            res.push("Open");
        }
    });

    return res;
    // return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

function accum(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}

// console.log(accum("ZpglnRxqenU"));

function check(a, x) {
    return a.includes(x);
}

// console.log(check([66, 101], 66));

function maps(x) {
    let res = [];
    x.map(item => {
        res.push(item * 2);
    });
    return res;
    // return x.map(n => n * 2);
}

// console.log(maps([1, 2, 3]));

function disemvowel(str) {
    return str.replace(/[aeiouy]/gi, '');
}

// console.log(disemvowel("This website is for losers LOL!"));

function boolToWord(bool) {
    return bool === true ? "Yes" : "No";
    // return bool ? 'Yes':'No';
}

// console.log(boolToWord(false));

function mango(quantity, price) {
    return (quantity - Math.floor(quantity / 3)) * price;
}

// console.log(mango(9, 5));