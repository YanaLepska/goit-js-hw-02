console.log("Task-3-1");

const delWords = (array) => {
  const result = array.filter((item) => item.length <= 3);
  return result;
};

console.log(delWords(["aaa", "bbbb", "ccc", "eeee", "dddd", "fff"]));
//-------------------------------------------------------------------------------------
console.log("Task-3-2");

const unpairDigits = (number) => {
  console.log(number);
  const str = String(number).split("");
  const result = str.every((item) => item % 2 !== 0);
  return result;
};

console.log(unpairDigits(13579));
console.log(unpairDigits(257));

//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const palinds = (str) => {
  const newStr = str.split("").reverse().join("");
  return str === newStr;
};
console.log(palinds("madam"));
console.log(palinds("wine"));
console.log(palinds("rotator"));

//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const sumOfItems = (array) => {
  const newArrSum = array.flat(2).reduce((acc, item) => acc + item, 0);
 
  return newArrSum;
};
console.log(
  sumOfItems([
    [
      [11, 12, 13],
      [14, 15, 16],
      [17, 17, 19],
    ],
    [
      [21, 22, 23],
      [24, 25, 26],
      [27, 27, 29],
    ],
    [
      [31, 32, 33],
      [34, 35, 36],
      [37, 37, 39],
    ],
  ])
);
