#!/usr/bin/env node





// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(4, 5));


//////////////////////////////////////////


// function sumArr(arr) {
//     const copyArr = arr.slice();
//     let sum = 0;
//     copyArr.forEach((number) => {
//         sum += number;
//     });
//     return sum;
// }

// console.log(sumArr([1, 2, 3, 4, 5, 3, 4]));

/////////////////////////////////////////////////

// function sumObjectValues(obj) {
//     const copyObject = { ...obj };
//     let sum = 0;
//     Object.values(copyObject).forEach((value) => {
//         sum += value
//     });
//     return sum;
// }

// console.log(sumObjectValues({1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7}));

//////////////////////////////////////////////////

function get_sum(array) {
    size = array.length;
    if (size == 1) {
        return array[0];
    } else {
        return (array[0] + get_sum(array.slice(1, size)))
    }
};

console.log(get_sum([4, 5, 6]));