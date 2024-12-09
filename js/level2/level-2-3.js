console.log("Task 2-1");

const twoWords = (str1, str2) => {
  const lastSymbol = str1.toLowerCase()[str1.length - 1];
  const firstSymbol = str2.toLowerCase()[0];
  if (lastSymbol === firstSymbol) {
    return `The last letter of ${str1} is equal to the first letter of ${str2}`;
  } else {
    return `The last letter of ${str1} is not equal to the first letter of ${str2}`;
  }
};

console.log(twoWords("Mountain", "Nature"));
console.log(twoWords("Knowledge", "Tree"));

//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const thirdZero = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
        count++;
            if (count === 3) {
                return `The index of third zero is ${i}`;
    }
    }
  }
};

console.log(thirdZero("0 0 miles 0 kilometers 00"));
console.log(thirdZero("0 I 0 LOVE YOU 0"));

//-------------------------------------------------------------------------------------
console.log("Task-2-3");
const sumNumbers = (str) => {
    const arrayOfNumbers = str.split(',');
    let sum = 0;
    const newArr = [];
    for (let elem of arrayOfNumbers) {
         newArr.push(Number(elem));
    }
    for (let elem of newArr) {
        sum += elem;
    }
    console.log(newArr);
    return sum;
};

console.log(sumNumbers('12,34,56'));
//-------------------------------------------------------------------------------------
console.log("Task-2-4");

const dateToObject = str => {
    const [year,month,day] = str.split('-');
    const date = {
        year,
        month,
        day,
    };
    return date;
};

console.log(dateToObject('2025-12-31'));