//-------------------------------------------------------------------------------------
console.log("Task-4-2");

const devide = str => {
    const fractionRegex = /^-?\d+(\.\d+)?$|^-?\d+\/\d+$/;
    if (fractionRegex.test(str)) {
        return 'This is a fraction';
    } else return 'This is NOT a fraction';
};

console.log(devide('dbshb/5645'));
console.log(devide('45.65'));

//-------------------------------------------------------------------------------------
console.log("Task-4-3");
const twoMaxNumber = array => {
    const sortArr = array.toSorted((a, b) => a - b);
    return sortArr[sortArr.length-2];
};

console.log(twoMaxNumber([65, 12, 8, 98, 14, 71, 32, 212, 128]));
//-------------------------------------------------------------------------------------
console.log("Task-4-4");

const fullArr = (n,array) => {
    const [min, max] = array;
    let newArray = [];
for (let i = 0; i < n; i++) {
     newArray.push(Math.floor(Math.random(i)*(max-min+1)+min));
    
    }
    return newArray.toSorted((a, b) => a - b);
};

console.log(fullArr(5,[12, 22]));

//-------------------------------------------------------------------------------------
console.log("Task-4-5");
const fullArrletters = (length) => {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let newArray = [];
for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * letters.length); 
        newArray.push(letters[randomIndex]);
    }
    return newArray.toSorted((a, b) => a - b);
};

console.log(fullArrletters(5));

//-------------------------------------------------------------------------------------
console.log("Task-4-6");


const fib = (n) => {
    if (n <= 1) {
        return n; 
    } else {
        return fib(n - 1) + fib(n - 2);
   }
};

console.log(fib(7));