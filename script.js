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

function digitize(n) {
    const arrStr = String(n).split('').reverse();
    return arrStr.map(num => {
        return Number(num);
    });
    // return String(n).split('').map(Number).reverse()
}

// console.log(digitize(35231));

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(null, args);
        // return Math.min(...args)
    }
}

const smallInt = new SmallestIntegerFinder();

// console.log(smallInt.findSmallestInt([78, 56, 232, 12, 8]));

function getSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}

// console.log(getSum(5, -1));

function rowSumOddNumbers(n) {
    return n * n * n;
    // return Math.pow(n, 3);
}

// console.log(rowSumOddNumbers(42));

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

// console.log(simpleMultiplication(5));

function reverseSeq(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    return res.reverse();
}

// console.log(reverseSeq(5));

const flip = (d, a) => {
    function sortfunction(a, b) {
        return a - b;
    }

    // let res;
    if (d === 'R') {
        return a.sort(sortfunction);
    } else {
        return a.sort(sortfunction).reverse();
    }
    // return res;
};
// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// console.log(flip('R', [3, 2, 1, 2]));

function areYouPlayingBanjo(name) {
    if (name.slice(0, 1) === 'R' || name.slice(0, 1) === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
    // return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// console.log(areYouPlayingBanjo('rdam'));

function filterList(arr) {
    // return arr.filter(item => typeof item === "number");
    return arr.filter(item => {
        return typeof item === "string";
    });
}

// console.log(filterList([1, 'a', 'b', 0, 15]));