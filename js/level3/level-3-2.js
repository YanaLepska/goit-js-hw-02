console.log("Task-3-1");

const preLastNumb = () => {
  let numbersArray = [];
  for (let i = 10; i <= 50; i++) {
    numbersArray.push(String(i));
  }
  numbersArray = numbersArray
    .map((item) => item.split(""))
    .filter((item, index) => item[item.length - 2] % 2 === 0)
    .map((item) => Number(item.join("")));
  return numbersArray;
};

console.log(preLastNumb());
//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const deleteElement = (arr) => {
  let newArray = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 5 !== 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(deleteElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5]));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const addZero = () => {
  let num = 5;
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "0";
  }
  return str;
};

console.log(addZero());

//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const deleteWord = (str) => {
  const newStr = str.split(" ");
  const result = newStr.filter((item, index) => index % 2 === 0);
  return result.join(" ");
};

console.log(deleteWord("aaa bbb ccc eee fff"));

//-------------------------------------------------------------------------------------
console.log("Task-3-5");
const sumOfArrays = (arr) => {
    let sum = 0;
    const newArr = arr.flat().map(item => {
        sum += item;
        return sum;
    });
    return sum;
};

console.log(
  sumOfArrays([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
