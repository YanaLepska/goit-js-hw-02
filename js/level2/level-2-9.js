console.log("Task-2-1");
const sumNumbers = number => {
    const toStr = String(number);
    let newStr = [];
    let sum = 0;
    for (let i = 0; i < toStr.length; i+=2){
        newStr.push(Number(toStr.slice(i, i+2)));
    }
    console.log(newStr);

    newStr = newStr.map(item => sum += item);
    return sum;
};

console.log(sumNumbers(123456));
//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const reversedArr = array => {
    const newArr = array.reverse();
    return newArr;
};

console.log(reversedArr([1, 2, 3, 4, 4, 5]));