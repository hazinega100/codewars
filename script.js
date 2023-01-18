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
}

console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]));

// function openOrSenior(data) {
//     let res = [];

//     data.forEach(item => {
//         item.forEach(i => {
//             if (i[0] >= 55 && i[1] > 7) {
//                 res.push("Senior");
//             } else {
//                 res.push("Open");
//             }
//         });
//     });

//     return res;
// }