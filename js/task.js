// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові


// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];


// function checkLength (firstArray, secondArray) {
//     if (firstArray.length !== secondArray.length) {
//         return false;
//     } 

//     for (const elem of firstArray) {
//         if (!secondArray.includes(elem)) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(checkLength(arr1, arr2));
// console.log(checkLength(arr3, arr4));
// console.log(checkLength(arr5, arr6));
// console.log(checkLength(arr7, arr8));
// console.log(checkLength(arr1, arr3));



// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

function caclculateAverage() {
    const args = arguments; 
// console.log(args);
let sum = 0;
let count = 0;
for (const elem of args) {
   if (typeof elem !== "number") {
    continue;    
   }    
   sum += elem;
   count++;
}

return sum/count;
}
console.log(caclculateAverage(1,8,"45", 5,"2","hfj", 1,"", 9, 15, 4)) ;