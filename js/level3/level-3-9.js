console.log("Task-3-1");
const isOnlyDigits = (str) => {
  const digits = "0123456789";
  const result = str.split("").every((item) => digits.includes(item));
  return result;
};

console.log(isOnlyDigits("4698f"));
console.log(isOnlyDigits("97496"));

//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const isOnlyPairDigits = (str) => {
  const digits = "0123456789";

  const result = str.split("").every((item) => item % 2 === 0);
  return result;
};
console.log(isOnlyPairDigits("97416"));
console.log(isOnlyPairDigits("8426"));

//-------------------------------------------------------------------------------------
console.log("Task-3-3");
const delMoreZero = (array) => {
  let newStr = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = String(array[i]).split("0").length - 1;
    console.log(count);
    if (count < 2) {
      newStr.push(array[i]);
    }
  }

  return newStr;
};

console.log(delMoreZero([10, 87, 56, 21, 500, 602, 70008, 901005]));
//-------------------------------------------------------------------------------------
console.log("Task-3-4");
const sumOfDigit = () => {
  let numbs = [];
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    numbs.push(String(i).split(""));
  }
  numbs = numbs.filter((item) => {
    sum = item.reduce((acc, el) => {
      return acc + Number(el);
    }, 0);
    if (sum === 13) {
      return item;
    }
  });

  return numbs;
};
console.log(sumOfDigit());
//-------------------------------------------------------------------------------------
console.log("Task-3-5");

const createArray = () => {
  let array = [];
    let number = 1;
  for (let i = 1; i < 4; i++) {
      let row = [];
      for (let j = 1; j < 4; j++){
          row.push(number);
          number++;
      }
      array.push(row);
  }
  return array;
};

console.log(createArray());
