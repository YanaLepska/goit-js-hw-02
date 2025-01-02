console.log("Task-4-1");
const delDouble = array => {
    let newArray = [];
    for (const element of array) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
};
console.log(delDouble([15, 298, 35, 74, 19, 15, 74]));
//-------------------------------------------------------------------------------------
console.log("Task-4-2");
console.log();

const delDoubleTwo = array => {
    let newArray = [];
    let count = {};
 for (let i = 0; i < array.length; i++) {
     count[array[i]] = (count[array[i]] || 0) + 1;
    }
    for (let i = 0; i < array.length; i++) {

        if (count[array[i]]<=3) {
             newArray.push(array[i]);
         }
        
    }
    console.log(count);
    return newArray;
};

console.log(delDoubleTwo([11,32,95,57,32,57,57,32,11,99,57,117]));

//-------------------------------------------------------------------------------------
console.log("Task-4-3");
const delDoubles = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]!==array[i+1] && array[i]!==array[i-1]) {
            newArray.push(array[i]);
        }
        
    }
    return newArray;
};
console.log(delDoubles([11,32,32,95,57,32,57,57,32,32,99,117]));

//-------------------------------------------------------------------------------------
console.log("Task-4-4");

const extremums = array => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };

};
console.log(extremums([11,32,8,95,57,32,57,89,132,65,99,17]));
