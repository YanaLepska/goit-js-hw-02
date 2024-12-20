console.log("Task-3-1");

const sortWords = (str) => {
  const array = str.split(" ");
  const result = array.toSorted((a, b) => a.localeCompare(b)).join(" ");
  return result;
};

console.log(sortWords("decide mistake hour allow viscount belong"));
//-------------------------------------------------------------------------------------
console.log("Task-3-2");

const devideNumber = (number) => {
  let arrayDevides = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      arrayDevides.push(i);
    }
  }
  return arrayDevides;
};

console.log(devideNumber(12));
console.log(devideNumber(125));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const bothDevideNumbers = (num1, num2) => {
  let arrayDevidesNumbers1 = [];
  let arrayDevidesNumbers2 = [];
  let array = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      arrayDevidesNumbers1.push(i);
    }
  }
  for (let j = 1; j <= num2; j++) {
    if (num2 % j === 0) {
      arrayDevidesNumbers2.push(j);
    }
  }
  for (let item of arrayDevidesNumbers1) {
    if (arrayDevidesNumbers2.includes(item)) {
      array.push(item);
    }
  }
  return array;
};

console.log(bothDevideNumbers(148, 28));

//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const oneDevide = (number) => {
  let count = 0;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
    if (count > 1) return false;
  }
  return count === 1;
};

console.log(oneDevide(9));
console.log(oneDevide(15));

//-------------------------------------------------------------------------------------
console.log("Task-3-5");

const maxNumber = (...args) => {
  const maxNum = Math.max(...args);
  return maxNum;
};

console.log(maxNumber(114, 899, 165, 684, 985, 32, 148, 745, 652));

//-------------------------------------------------------------------------------------
console.log("Task-3-6");
const oneDigit = (array) => {
  let arrayDoubleNumb = [];
  const newArray = array.map((item) => {
    return (strArr = String(item));
  });
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].length === 1) {
      arrayDoubleNumb.push(Number(newArray[i]), Number(newArray[i]));
    } else arrayDoubleNumb.push(Number(newArray[i]));
  }

  console.log(newArray);
  return arrayDoubleNumb;
};

console.log(oneDigit([21, 1, 22, 2, 11, 8, 7, 74]));
//-------------------------------------------------------------------------------------
console.log("Task-3-7");
const deleteVowels = (str) => {
  const vowels = "aioeu";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(deleteVowels("My flowers is beautiful"));
//-------------------------------------------------------------------------------------
console.log("Task-3-8");

const upFirstLet = (str) => {
  const newStr = str
    .split(" ")
    .map((item) => {
      let toUp = item[item.length - 1].toUpperCase();
      let sliceWord = item.slice(0, item.length - 1);
      if (item.length > 2) {
        return sliceWord + toUp;
      } else return item;
    })
    .join(" ");
  return newStr;
};

console.log(upFirstLet("They always dream to visit the palace"));

//-------------------------------------------------------------------------------------
console.log("Task-3-9");

const sumStructure = () => {
  let data = [
    {
      1: [1, 2, 3],
      2: [1, 2, 3],
      3: [1, 2, 3],
    },
    {
      1: [1, 2, 3],
      2: [1, 2, 3],
      3: [1, 2, 3],
    },
    {
      1: [1, 2, 3],
      2: [1, 2, 3],
      3: [1, 2, 3],
    },
  ];

  let sum = 0;
  for (const element of data) {
    let values = Object.values(element);
    values = values.flat().map((item) => (sum += item));
  }
  return `Sum is ${sum}`;
};
console.log(sumStructure());
