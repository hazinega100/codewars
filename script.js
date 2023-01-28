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
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            res.push(arr[i]);
        }
    }
    return res;
}

// console.log(filterList([1, 'a', 'b', 0, 15]));

function validatePIN(pin) {
    // return /^(\d{4}|\d{6})$/.test(pin)
    if (pin.length == 4 || pin.length == 6) {

        if (isNaN(pin) == true) {
            return false;
        } else if (pin < 0) {
            return false;
        } else if (pin.startsWith('+', '-', ' ', '.')) {
            return false;
        } else if (pin.includes('.', "'", "+", " ")) {
            return false;
        } else if (pin.endsWith('\n')) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// console.log(validatePIN("12345"));

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

// console.log(longest("aretheyhere", "yestheyarehere"));

function oddOrEven(array) {
    let sum = 0;

    array.map(arr => sum += arr);
    return sum % 2 === 0 ? "even" : "odd";
    // return array.reduce((a,b) => a+b,0) % 2 ? 'odd' : 'even';
}

// console.log(oddOrEven([0, 1, 5]));

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max]; // fix me!
    // return [Math.min(...arr), Math.max(...arr)];
    // return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

// console.log(minMax([2334454, 5]));

var min = function (list) {
    list.sort((a, b) => (a - b));
    return list[0];
    // return Math.min(...list);
};

var max = function (list) {
    list.sort((a, b) => (b - a));
    return list[0];
    // return Math.max(...list);
};

function fakeBin(x) {
    return x.split('').map(item => item < 5 ? item = 0 : item = 1).join('');
    // return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// console.log(fakeBin('45385593107843568'));

function updateLight(current) {

    if (current == "green") {
        return "yellow";
    } else if (current == "yellow") {
        return "red";
    } else {
        return "green";
    }
    // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// console.log(updateLight("green"));

function points(games) {
    let total = 0;

    games.map(item => {
        if (item[0] < item[2]) {
            total += 0;
        }
        if (item[0] == item[2]) {
            total += 1;
        }
        if (item[0] > item[2]) {
            total += 3;
        }
    });

    return total;
}

// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 && val > 20) {
        return "Outside";
    } else {

        // Only change code above this line
        return "Inside";
    }
}

// testLogicalOr(15);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else

    if (val < 5) {
        return "Smaller than 5";
    } else {

        return "Between 5 and 10";
    }
}

// console.log(testElseIf(7));

function isIsogram(str) {
    //if empty return true.
    if (str.isEmpty) {
        return true;
    } else {
        // All lower case.
        str = str.toLowerCase();
    }
    //split string into individual characters. 
    var array = str.split('');
    var sortedArr = array.slice().sort();

    for (var i = 0; i < array.length; i++) {
        //if duplicate is found return false.
        if (sortedArr[i + 1] == sortedArr[i]) {
            return false;
        }
    }
    return true;
    // return new Set(str.toUpperCase()).size == str.length;
}

// console.log(isIsogram('moOse'));

function grow(x) {
    return x.reduce((num, i) => num * i);
    // return eval(x.join("*"));
}

// console.log(grow([1, 2, 3]));

function alphabetPosition(text) {
    return text.toLowerCase().split('')
        .filter(c => c >= 'a' & c <= 'z')
        .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function removeChar(str) {
    //You got this!
    return str.slice(1, str.length - 1);
}

// console.log(removeChar('eloquent'));

function towerBuilder(n) {
    var space = "";
    var star = "";
    var result = [];
    for (var i = 1; i <= n; i++) {
        space = (" ").repeat(n - i);
        star = ("*").repeat((2 * i) - 1);
        result.push(space + star + space);
    }
    return result;
    // return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}

// console.log(towerBuilder(5));

function sortArray(array) {
    // Return a sorted array.
    const odds = array
        .filter(x => x % 2)
        .sort((a, b) => a - b);

    return array
        .map(x => x % 2 ? odds.shift() : x);
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

function solution(str) {
    return str.split('').reverse().join('');
}

// console.log(solution('world'));

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }

    //     names = names || [];
    //   switch(names.length){
    //     case 0: return 'no one likes this'; break;
    //     case 1: return names[0] + ' likes this'; break;
    //     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    //     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    //     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    //   }

    // return {
    //     0: 'no one likes this',
    //     1: `${names[0]} likes this`, 
    //     2: `${names[0]} and ${names[1]} like this`, 
    //     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    //     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    //   }[Math.min(4, names.length)]
}

// console.log(likes(['Peter']));

function DNAtoRNA(dna) {
    return dna.split('').map(item => item === "T" ? item = "U" : item = item).join('');
    // return dna.split("T").join("U");
    // return dna.replace(/T/g, 'U');
}

// console.log(DNAtoRNA("TTTT"));

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    let min = numbers[0];
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            minIndex = i;
        }
    }
    return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];

    // let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// console.log(removeSmallest([1, 2, 3, 4, 5]));